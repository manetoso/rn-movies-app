import React, { FC } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { CastActor } from '../cast/CastActor';

import { Formatter } from '@/config/helpers/formatter';
import type { FullMovie } from '@/core/entities/movie.entity';
import type { Cast } from '@/core/entities/cast.entity';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails: FC<Props> = ({ cast, movie }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.directionRow}>
          <Text>{movie.rating}</Text>
          <Text style={styles.marginLeft}>- {movie.genres.join(', ')}</Text>
        </View>

        <Text style={styles.subtitle}>Historia</Text>
        <Text style={styles.body}>{movie.description}</Text>
        <Text style={styles.subtitle}>Presupuesto</Text>
        <Text style={styles.body}>{Formatter.currency(movie.budget)}</Text>

        <View style={styles.castingContainer}>
          <Text style={styles.subtitle}>Elenco</Text>
          <FlatList
            data={cast}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <CastActor actor={item} />}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  directionRow: {
    flexDirection: 'row',
  },
  marginLeft: {
    marginLeft: 5,
  },
  subtitle: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
  },
  castingContainer: {
    marginTop: 10,
  },
});
