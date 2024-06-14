import { HttpAdapter } from '@/config/adapters/http/http.adapter';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

import type { Movie } from '@/core/entities/movie.entity';
import type { PopularResponse } from '@/infrastructure/interfaces/movie-db.responses';

export const moviesPopularUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<PopularResponse>('/popular');
    return popular.results.map(MovieMapper.fromMovieDBResponseToMovie);
  } catch (error) {
    throw new Error('Error on get -Popular- movies');
  }
};
