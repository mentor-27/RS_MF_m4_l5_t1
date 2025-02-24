const baseUrl = '/RS_MF_m4_l5_t1';

export const intrenalRoutes = {
  home: baseUrl + '/',
  characters: baseUrl + '/characters',
  character: (alias: string) => `${baseUrl}/characters/${alias}`,
  locations: baseUrl + '/locations',
  location: (alias: string) => `${baseUrl}/locations/${alias}`,
  episodes: baseUrl + '/episodes',
  episode: (alias: string) => `${baseUrl}/episodes/${alias}`,
  login: baseUrl + '/login',
};
