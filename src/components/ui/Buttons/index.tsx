import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import color from '../../../constants/color';

import { TextButtonProp } from './type';

export function TextButton({ title, titleStyle, ...props }: TextButtonProp) {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: color.mainColor,
      }}
      activeOpacity={0.7}
      {...props}
    >
      <Text
        style={{
          color: color.white,
          fontSize: 16,
          ...titleStyle,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
