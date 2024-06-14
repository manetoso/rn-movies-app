import { useEffect, useState } from 'react';

import { movieDBFetcher } from '@/config/adapters/movieDB.adapter';
import * as UseCases from '@/config/use-cases';

import type { FullMovie } from '@/core/entities/movie.entity';
import type { Cast } from '@/core/entities/cast.entity';

export const useMovie = (movieId: number) => {
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadMovie = async () => {
    const [fullMovie, movieCast] = await Promise.all([
      UseCases.movieGetByIdUseCase(movieDBFetcher, movieId),
      UseCases.getMovieCastUseCase(movieDBFetcher, movieId),
    ]);
    setMovie(fullMovie);
    setCast(movieCast);
    setIsLoading(false);
  };

  useEffect(() => {
    loadMovie();
  }, [movieId]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    cast,
    movie,
    isLoading,
  };
};
