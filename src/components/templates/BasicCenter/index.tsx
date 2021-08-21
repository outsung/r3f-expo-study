import React from 'react';
import { View } from 'react-native';
import { Screen, ContentsScreen } from '../../ui/Screens';

import { BasicCenterProps } from './type';

export default function BasicCenter({ contants, isScroll, ...props }: BasicCenterProps) {
  return (
    <Screen>
      <ContentsScreen
        isScroll={isScroll}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <View
          style={{
            paddingVertical: 8,
            paddingHorizontal: 8,
            ...props,
          }}
        >
          {contants}
        </View>
      </ContentsScreen>
    </Screen>
  );
}
