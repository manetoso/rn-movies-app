import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/home/HomeScreen';
import { DetailsScreens } from '../screens/details/DetailsScreens';

export type RootStackParams = {
  Home: undefined;
  Details: { movieId: number };
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreens} />
    </Stack.Navigator>
  );
};
