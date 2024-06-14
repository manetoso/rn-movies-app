import { HttpAdapter } from '@/config/adapters/http/http.adapter';
import { CastMaper } from '@/infrastructure/mappers/cast.mapper';

import type { Cast } from '@/core/entities/cast.entity';
import type { MovieDBCastResponse } from '@/infrastructure/interfaces/movie-db.responses';

export const getMovieCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<Cast[]> => {
  try {
    const { cast } = await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`);
    return cast.map(CastMaper.fromMovieDBCastResponseToEntity);
  } catch (error) {
    throw new Error(`Error on get -Cast- movie with id: ${movieId}`);
  }
};
