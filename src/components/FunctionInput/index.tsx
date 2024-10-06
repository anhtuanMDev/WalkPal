import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {COLOR} from '../../utils/colorEnum';
import {getSize} from '../../utils/responsive';
import {TFunctTextInputProp} from './type';

export default function ({
  lead,
  value,
  style, //for text input
  error,
  action,
  errMess,
  viewStyle, // for parent view style
  onChangeText,
  containerStyle, // wraper textinput view style
  placeholder = 'Placeholder',
  ...rest
}: TFunctTextInputProp) {
  return (
    <View style={[viewStyle]}>
      <View style={[styles.container, containerStyle]}>
        {lead}
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={[styles.textInput, style]}
          {...rest}
        />
        {action}
      </View>
      {error && <Text style={styles.textError}>{errMess}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    elevation: 5,
  },
  textInput: {
    flex: 8,
    height: getSize.v(45),
    paddingLeft: getSize.s(10),
    paddingRight: getSize.s(5),
    backgroundColor: COLOR.text.input.view,
    color: COLOR.others.black,
  },
  textError: {
    color: COLOR.others.error,
    paddingLeft: getSize.s(10),
    marginTop: getSize.v(5)
  },
});
