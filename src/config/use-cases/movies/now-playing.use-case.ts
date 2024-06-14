import { HttpAdapter } from '@/config/adapters/http/http.adapter';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

import type { Movie } from '@/core/entities/movie.entity';
import type { NowPlayingResponse } from '@/infrastructure/interfaces/movie-db.responses';

export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
    return nowPlaying.results.map(MovieMapper.fromMovieDBResponseToMovie);
  } catch (error) {
    throw new Error('Error on get -NowPlaying- movies');
  }
};
