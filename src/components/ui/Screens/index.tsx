import React from 'react';
import { SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native';

import color from '../../../constants/color';

import { ScreenProps, ContentsScreenProps } from './type';

export function Screen({ children }: ScreenProps) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color.white,
      }}
    >
      {children}
    </SafeAreaView>
  );
}

export function ContentsScreen({ children, isScroll = false, ...props }: ContentsScreenProps) {
  return (
    <KeyboardAvoidingView {...props}>
      {isScroll ? (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
          {children}
        </ScrollView>
      ) : (
        <>{children}</>
      )}
    </KeyboardAvoidingView>
  );
}
