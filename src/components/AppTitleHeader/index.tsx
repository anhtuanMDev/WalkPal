import React from 'react';
import {View, Text, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {textStyle} from '../../utils/textStyle';

type Prop = {
  containerStyle?: ViewStyle | ViewStyle[];
  greeting: string;
  greetStyle?: TextStyle | TextStyle[];
  title: string;
  titleStyle?: TextStyle | TextStyle[];
  content: string;
  contentStyle?: TextStyle | TextStyle[];
};

export default function ({
  containerStyle,
  greeting,
  greetStyle,
  title,
  titleStyle,
  content,
  contentStyle,
}: Prop) {
  return (
    <View style={containerStyle}>
      <Text style={[textStyle.header.h5, greetStyle]}>{greeting}</Text>
      <Text style={[textStyle.header.h1, titleStyle]}>{title}</Text>
      <Text style={[textStyle.header.h7, contentStyle]}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 20,
    color: '#4D5360',
    marginBottom: 10,
  },
  brandName: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2932A8',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#4D5360',
    textAlign: 'center',
  },
});
