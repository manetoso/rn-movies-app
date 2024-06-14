import { HttpAdapter } from '@/config/adapters/http/http.adapter';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

import type { Movie } from '@/core/entities/movie.entity';
import type { PopularResponse } from '@/infrastructure/interfaces/movie-db.responses';

interface Options {
  page?: number;
  limit?: number;
}

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
  options?: Options,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<PopularResponse>('/popular', {
      params: {
        page: options?.page ?? 1,
        limit: options?.limit ?? 20,
      },
    });
    return popular.results.map(MovieMapper.fromMovieDBResponseToMovie);
  } catch (error) {
    throw new Error('Error on get -Popular- movies');
  }
};
