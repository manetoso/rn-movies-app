import { HttpAdapter } from '@/config/adapters/http/http.adapter';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

import type { Movie } from '@/core/entities/movie.entity';
import type { UpcomingResponse } from '@/infrastructure/interfaces/movie-db.responses';

export const moviesUpcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<UpcomingResponse>('/upcoming');
    return upcoming.results.map(MovieMapper.fromMovieDBResponseToMovie);
  } catch (error) {
    throw new Error('Error on get -Upcoming- movies');
  }
};
