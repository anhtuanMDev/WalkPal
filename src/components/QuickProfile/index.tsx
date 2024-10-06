import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getSize} from '../../utils/responsive';
import {textStyle} from '../../utils/textStyle';

export default function UserInfo() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../../assets/images/avatar.jpg')}
        resizeMode="contain"
        style={styles.avt}
      />
      <Text style={styles.nameText}>His name</Text>
      <Text style={textStyle.header.h8}>Current place</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0, 
    alignItems: 'center', 
    width: getSize.s(120), 
    padding: 10,
  },
  avt: {
    width: getSize.s(100),
    height: getSize.s(100),
    borderRadius: 100,
    padding: 15,
    overflow: 'hidden',
  },
  nameText: {
    ...textStyle.header.hb7,
    marginTop: 5,
  },
});
