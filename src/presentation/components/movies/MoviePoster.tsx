import React, { FC } from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { type NavigationProp, useNavigation } from '@react-navigation/native';

import type { Movie } from '@/core/entities/movie.entity';
import type { RootStackParams } from '@/presentation/navigation/Navigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster: FC<Props> = ({ movie, height = 420, width = 300 }) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <Pressable
      onPress={() => navigation.navigate('Details', { movieId: movie.id })}
      style={({ pressed }) => [styles.pressable, { width, height, opacity: pressed ? 0.9 : 1 }]}>
      <View style={[styles.imageContiner, { width, height }]}>
        <Image
          style={styles.image}
          source={{
            uri: movie.poster,
          }}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imageContiner: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
  pressable: {
    marginHorizontal: 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
});
