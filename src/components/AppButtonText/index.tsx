import React from 'react';
import { Pressable, Text } from 'react-native';
import { TAppButtonText } from './types';

export default function ({title = 'Press',textStyle, ...rest}: TAppButtonText) {
  return (
    <Pressable {...rest}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}
