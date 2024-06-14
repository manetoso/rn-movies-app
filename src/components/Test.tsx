import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {}

export const Test: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
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
