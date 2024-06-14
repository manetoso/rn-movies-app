import React, { FC } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '@/presentation/hooks/useMovies';
import { PosterCarousel } from '@/presentation/components/movies/PosterCarousel';
import { HorizontalCarousel } from '@/presentation/components/movies/HorizontalCarousel';
import { FullScreenLoader } from '@/presentation/components/loaders/FullScreenLoader';

interface Props {}

export const HomeScreen: FC<Props> = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, nowPlaying, populars, topRated, upcoming, popularNextPage } = useMovies();

  if (isLoading) return <FullScreenLoader />;
  return (
    <ScrollView>
      <View style={[styles.container, { marginTop: top + 20 }]}>
        <PosterCarousel movies={nowPlaying} />
        <HorizontalCarousel
          movies={populars}
          title="Populares"
          loadNextPage={() => popularNextPage()}
        />
        <HorizontalCarousel movies={topRated} title="Mejor Calificadas" />
        <HorizontalCarousel movies={upcoming} title="Proximamente" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
});
