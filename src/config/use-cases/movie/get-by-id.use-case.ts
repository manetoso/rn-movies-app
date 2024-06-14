import { HttpAdapter } from '@/config/adapters/http/http.adapter';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

import type { FullMovie } from '@/core/entities/movie.entity';
import type { MovieDBResponse } from '@/infrastructure/interfaces/movie-db.responses';

export const movieGetByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    const movie = await fetcher.get<MovieDBResponse>(`/${movieId}`);
    return MovieMapper.fromMovieDBResponseToFullMovie(movie);
  } catch (error) {
    throw new Error('Error on get -Movie- by id');
  }
};
