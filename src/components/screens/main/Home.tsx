import React from 'react';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

import color from '../../../constants/color';
import size from '../../../constants/size';

import { Title, Text } from '../../../components/ui/Texts';
import BasicCenter from '../../../components/templates/BasicCenter';

export const HomeScreenOptions: BottomTabNavigationOptions = {};
export type HomeScreenParams = undefined;
export default function Home() {
  return (
    <BasicCenter
      contants={
        <View style={{ alignItems: 'center' }}>
          <Title>{homeScreenConstants.title}</Title>
          <View style={{ marginTop: 8 }}>
            <Text>
              {homeScreenConstants.description[0][0]}
              <Text style={{ color: color.mainColor, fontSize: size.textSize.small }}>
                {homeScreenConstants.description[0][1]}
              </Text>
            </Text>
            <Text>{homeScreenConstants.description[1]}</Text>
            <Text>
              {homeScreenConstants.description[2][0]}
              <Text style={{ color: color.mainColor, fontSize: size.textSize.small }}>
                {homeScreenConstants.description[2][1]}
              </Text>
            </Text>
          </View>
        </View>
      }
    />
  );
}

const homeScreenConstants = {
  title: '모델링 테스트',
  description: [
    ['- 커스텀 모델링 ', '.with 블랜더'],
    '- 호버 에니메이션',
    ['- gyroscope를 이용한 에니메이션 ', '.width slerp'],
  ],
};
