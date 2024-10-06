import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLOR } from '../../utils/colorEnum';
import { textStyle } from '../../utils/textStyle';
import { TAppTitleHeaderProps } from './type';

export default function ({
  containerStyle,
  greeting,
  greetStyle,
  title,
  titleStyle,
  content,
  contentStyle,
}: TAppTitleHeaderProps) {
  return (
    <View style={containerStyle}>
      {greeting && <Text style={[textStyle.header.h5, styles.text, greetStyle]}>{greeting}</Text>}
      {title && <Text style={[textStyle.header.h1, styles.text, titleStyle]}>{title}</Text>}
      {content && <Text style={[textStyle.header.h7, styles.context, contentStyle]}>{content}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: COLOR.text.header.brand
  },
  context: {
    color: COLOR.text.header.context
  },
});
