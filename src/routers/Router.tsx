import React from 'react';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackNavigatorGenerator } from '../types/navigation';
import MainNavigator, { MainTabParamList } from './Main';

export type AppStackNavigationProps = StackNavigationProp<AppStackParamList>;
export type AppStackParamList = {
  Main: NavigatorScreenParams<MainTabParamList>;
};

const { Stack, screens } = StackNavigatorGenerator<AppStackParamList>({
  Main: {
    component: MainNavigator,
    options: { animationEnabled: false },
  },
});

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" headerMode="none">
        {Object.entries(screens).map(([key, { component, options }], i) => (
          <Stack.Screen key={i} name={key} component={component} options={options} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
