import { CompositeNavigationProp } from '@react-navigation/core';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { NavigationProp as RNNavigationProp } from '@react-navigation/native';

type ParamList = Record<string, Record<string, unknown> | undefined>;
type RouteProp<P extends ParamList, R extends keyof P> = Readonly<{
  key: string;
  name: R;
}> &
  (undefined extends P[R]
    ? Readonly<{
        params?: Readonly<P[R]> | undefined;
      }>
    : Readonly<{
        params: Readonly<P[R]>;
      }>);
type NavigationProp<
  P extends ParamList,
  N extends RNNavigationProp<P> | undefined = undefined,
> = N extends RNNavigationProp<P>
  ? Readonly<CompositeNavigationProp<N, RNNavigationProp<P>>>
  : Readonly<RNNavigationProp<P>>;
// use in screen
export type ScreenProps<
  P extends ParamList,
  R extends keyof P,
  N extends RNNavigationProp<P> | undefined = undefined,
> = {
  navigation: NavigationProp<P, N>;
  route: RouteProp<P, R>;
};

// use in StackNavigator
type StackNavigatorScreenProps = {
  component: () => JSX.Element;
  options: StackNavigationOptions;
};
export function StackNavigatorGenerator<
  P extends ParamList,
  O extends Record<string, unknown> = Record<string, unknown>,
>(
  screens: {
    [K in Readonly<keyof P>]: StackNavigatorScreenProps;
  },
) {
  return { Stack: createStackNavigator<P & O>(), screens };
}

type BottomTabNavigatorScreenProps = {
  component: () => JSX.Element;
  options: BottomTabNavigationOptions;
};
export function BottomTabNavigatorGenerator<
  P extends ParamList,
  O extends Record<string, unknown> = Record<string, unknown>,
>(
  screens: {
    [K in Readonly<keyof P>]: BottomTabNavigatorScreenProps;
  },
) {
  return { BottomTab: createBottomTabNavigator<P & O>(), screens };
}
