import { useEffect, useState } from 'react';

import { Movie } from '@/core/entities/movie.entity';
import { movieDBFetcher } from '@/config/adapters/movieDB.adapter';
import * as UseCases from '@/config/use-cases';

let popularPageNumber = 1;

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [populars, setPopulars] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const initLoad = async () => {
    const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
      UseCases.moviesNowPlayingUseCase(movieDBFetcher),
      UseCases.moviesPopularUseCase(movieDBFetcher),
      UseCases.moviesTopRatedUseCase(movieDBFetcher),
      UseCases.moviesUpcomingUseCase(movieDBFetcher),
    ]);

    setPopulars(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);
    setNowPlaying(nowPlayingMovies);
    setIsLoading(false);
  };

  const popularNextPage = async () => {
    popularPageNumber++;
    const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, {
      page: popularPageNumber,
    });
    setPopulars(prev => [...prev, ...popularMovies]);
  };

  useEffect(() => {
    initLoad();
  }, []);

  return {
    populars,
    topRated,
    upcoming,
    isLoading,
    nowPlaying,
		popularNextPage,
  };
};
