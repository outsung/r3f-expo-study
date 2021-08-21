import React from 'react';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Color from '../../constants/color';
import { Text } from '../../components/ui/Texts';

import { BottomTabNavigatorGenerator } from '../../types/navigation';
import { AppStackNavigationProps } from '../Router';
import HomeScreen, {
  HomeScreenParams,
  HomeScreenOptions,
} from '../../components/screens/main/Home';
import TestScreen, {
  TestScreenParams,
  TestScreenOptions,
} from '../../components/screens/main/Test';

export type MainTabNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList>,
  AppStackNavigationProps
>;
export type MainTabParamList = {
  Home: HomeScreenParams;
  Test: TestScreenParams;
};

const { BottomTab, screens } = BottomTabNavigatorGenerator<MainTabParamList>({
  Home: {
    component: HomeScreen,
    options: {
      tabBarIcon: ({ focused }) => (
        <MaterialCommunityIcons
          name={'home'}
          size={18}
          color={focused ? Color.mainColor : Color.black}
        />
      ),
      tabBarLabel: ({ focused }) => (
        <Text
          style={{
            color: focused ? Color.mainColor : Color.black,
            fontSize: 14,
          }}
        >
          홈
        </Text>
      ),
      ...HomeScreenOptions,
    },
  },
  Test: {
    component: TestScreen,
    options: {
      tabBarIcon: ({ focused }) => (
        <MaterialCommunityIcons
          name={'hammer'}
          size={18}
          color={focused ? Color.mainColor : Color.black}
        />
      ),
      tabBarLabel: ({ focused }) => (
        <Text
          style={{
            color: focused ? Color.mainColor : Color.black,
            fontSize: 14,
          }}
        >
          테스트
        </Text>
      ),
      ...TestScreenOptions,
    },
  },
});

export default function MainNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      {Object.entries(screens).map(([key, { component, options }], i) => (
        <BottomTab.Screen key={i} name={key} component={component} options={options} />
      ))}
    </BottomTab.Navigator>
  );
}
