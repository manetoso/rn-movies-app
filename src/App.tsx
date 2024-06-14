import React, { FC } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { HomeScreen } from '@/presentation/screens/home/HomeScreen';

interface Props {}

export const App: FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
