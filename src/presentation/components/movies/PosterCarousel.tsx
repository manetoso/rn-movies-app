import React, { FC } from 'react';
import { View, ScrollView } from 'react-native';

import { MoviePoster } from './MoviePoster';
import type { Movie } from '@/core/entities/movie.entity';

interface Props {
  movies: Movie[];
  height?: number;
}

export const PosterCarousel: FC<Props> = ({ movies, height = 440 }) => {
  return (
    <View style={{ height }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};
