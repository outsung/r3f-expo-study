import React from 'react';
import { View } from 'react-native';
import { Screen, ContentsScreen } from '../../ui/Screens';

import { BasicTopProps } from './type';

export default function BasicTop({ contants, isScroll, ...props }: BasicTopProps) {
  return (
    <Screen>
      <ContentsScreen
        isScroll={isScroll}
        style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
      >
        <View
          style={{
            flex: 1,
            width: '100%',
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
