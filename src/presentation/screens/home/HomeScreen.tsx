import React, { FC } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '@/presentation/hooks/useMovies';
import { PosterCarousel } from '@/presentation/components/movies/PosterCarousel';
import { HorizontalCarousel } from '@/presentation/components/movies/HorizontalCarousel';

interface Props {}

export const HomeScreen: FC<Props> = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, nowPlaying, populars, topRated, upcoming } = useMovies();

  if (isLoading) {
    return (
      <View style={[styles.container, { marginTop: top + 20 }]}>
        <Text>Cargando...</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={[styles.container, { marginTop: top + 20 }]}>
        <PosterCarousel movies={nowPlaying} />
        <HorizontalCarousel
          movies={populars}
          title="Populares"
          loadNextPage={() => console.log('Cargando mas...')}
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
