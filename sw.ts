const staticCacheName: string = 'static-v1';
const dynamicCacheName: string = 'dynamic-v1';

const ASSETS: string[] = [
  '/',
  '/assets/logo.png',
  '/index.html',
  '/src/index.css',
  '/src/App.css',
].map(url => '/RS_MF_m4_l5_t1'.concat(url));

self.addEventListener('install', async () => {
  const cache = await caches.open(staticCacheName);
  await cache.addAll(ASSETS);
});

self.addEventListener('activate', async () => {
  const keys = await caches.keys();
  await Promise.all(
    keys
      .filter(key => key !== staticCacheName && key !== dynamicCacheName)
      .map(key => caches.delete(key))
  );
});

self.addEventListener('fetch', (e: FetchEvent) => {
  e.respondWith(cacheFirst(e.request));
});

const cacheFirst = async (request: Request): Promise<Response> => {
  const cached = await caches.match(request);

  try {
    return (
      cached ??
      (await fetch(request).then(() => {
        return networkFirst(request);
      }))
    );
  } catch (e) {
    return networkFirst(request);
  }
};

const networkFirst = async (request: Request): Promise<Response> => {
  const cache = await caches.open(dynamicCacheName);

  try {
    const response = await fetch(request);
    await cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    return cached ?? ((await caches.match('/404')) as Response);
  }
};
