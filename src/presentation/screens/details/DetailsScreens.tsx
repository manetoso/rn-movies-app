import React, { FC } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { type StackScreenProps } from '@react-navigation/stack';

import { useMovie } from '@/presentation/hooks/useMovie';
import { MovieHeader } from '@/presentation/components/movie/MovieHeader';
import { FullScreenLoader } from '@/presentation/components/loaders/FullScreenLoader';
import { MovieDetails } from '@/presentation/components/movie/MovieDetails';

import type { RootStackParams } from '@/presentation/navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreens: FC<Props> = ({ route }) => {
  const { movieId } = route.params;
  const { cast = [], movie, isLoading } = useMovie(movieId);

  if (isLoading) return <FullScreenLoader />;
  return (
    <ScrollView style={styles.container}>
      <MovieHeader
        originalTitle={movie!.originalTitle}
        poster={movie!.poster}
        title={movie!.title}
      />
      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
});
