export const intrenalRoutes = {
  home: '/',
  characters: '/characters',
  character: (alias: string) => `/characters/${alias}`,
  locations: '/locations',
  location: (alias: string) => `/locations/${alias}`,
  episodes: '/episodes',
  episode: (alias: string) => `/episodes/${alias}`,
};
