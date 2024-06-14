import 'react-native-gesture-handler';

import React, { FC } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Navigation } from '@/presentation/navigation/Navigation';

interface Props {}

export const App: FC<Props> = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
