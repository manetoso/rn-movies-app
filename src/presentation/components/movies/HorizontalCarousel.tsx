import React, { FC, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  type NativeSyntheticEvent,
  type NativeScrollEvent,
} from 'react-native';

import type { Movie } from '@/core/entities/movie.entity';
import { MoviePoster } from './MoviePoster';

interface Props {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}

export const HorizontalCarousel: FC<Props> = ({ movies, title, loadNextPage }) => {
  const isLoading = useRef(false);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = e.nativeEvent;
    const isEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
    if (!isEndReached) return;

    isLoading.current = true;
    loadNextPage && loadNextPage();
  };

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ height: title ? 260 : 220 }}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={movies}
        keyExtractor={movie => movie.id.toString()}
        renderItem={({ item }) => <MoviePoster movie={item} width={140} height={200} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '300',
    marginLeft: 10,
    marginBottom: 10,
  },
});
