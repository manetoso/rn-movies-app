import React, { FC } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import type { Cast } from '@/core/entities/cast.entity';

interface Props {
  actor: Cast;
}

export const CastActor: FC<Props> = ({ actor }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: actor.avatar }} style={styles.avatar} />
      <View style={styles.actorInfo}>
        <Text style={styles.title}>{actor.name}</Text>
        <Text style={styles.subtitle}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    width: 100,
  },
  avatar: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    opacity: 0.7,
    fontWeight: 'bold',
  },
});
