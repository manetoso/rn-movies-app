import { HttpAdapter } from '@/config/adapters/http/http.adapter';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

import type { Movie } from '@/core/entities/movie.entity';
import type { TopRatedResponse } from '@/infrastructure/interfaces/movie-db.responses';

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<TopRatedResponse>('/top_rated');
    return topRated.results.map(MovieMapper.fromMovieDBResponseToMovie);
  } catch (error) {
    throw new Error('Error on get -Top Rated- movies');
  }
};
