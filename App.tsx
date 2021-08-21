import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { RecoilRoot } from 'recoil';

import Router from './src/routers/Router';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <RecoilRoot>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Router />
      </SafeAreaView>
    </RecoilRoot>
  );
};
