import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text
} from 'react-native';
import { COLOR } from '../../utils/colorEnum';
import { getSize } from '../../utils/responsive';
import { textStyle } from '../../utils/textStyle';
import { TAppButtonFillProp } from './type';



export default function ({title = 'Bấm', styleButton, textStyles, ...rest} : TAppButtonFillProp) {
  return (
    <Pressable style={[style.container, styleButton]} {...rest}>
      <Text style={[textStyle.button.fill.boldAllCap, style.titleStyle, textStyles]}>{title}</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: COLOR.button.royalBlue,
        paddingTop: getSize.v(10),
        paddingBottom: getSize.v(15),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    titleStyle: {
        color: COLOR.others.white
    }
});
