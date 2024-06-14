import React, { FC } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { Test } from '@/components/Test';

interface Props {}

export const Main: FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Test />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
