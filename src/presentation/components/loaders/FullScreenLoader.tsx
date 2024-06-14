import React, { FC } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

interface Props {}

export const FullScreenLoader: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="indigo" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
