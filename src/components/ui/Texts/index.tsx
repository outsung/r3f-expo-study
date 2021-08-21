import React from 'react';
import { Text as RnText } from 'react-native';

import color from '../../../constants/color';

import { DefaultTextProp } from './type';

export function Text({ children, fixed = false, ...props }: DefaultTextProp) {
  return (
    <RnText
      allowFontScaling={!fixed}
      {...props}
      style={[
        {
          fontSize: 16,
          color: color.black,
        },
        props.style,
      ]}
    >
      {children}
    </RnText>
  );
}

export function Title({ children, fixed = false, ...props }: DefaultTextProp) {
  return (
    <RnText
      allowFontScaling={!fixed}
      {...props}
      style={[
        {
          fontSize: 26,
          color: color.black,
          fontWeight: 'bold',
        },
        props.style,
      ]}
    >
      {children}
    </RnText>
  );
}
