import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'e9ca31205c0080b081d82fd75e22922d',
    language: 'es-MX',
  },
});
