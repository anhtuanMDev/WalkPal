import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getSize} from '../../../utils/responsive';
import AppTitleHeader from '../../../components/AppTitleHeader';
import {textStyle} from '../../../utils/textStyle';
import {COLOR} from '../../../utils/colorEnum';
import AppValidateForm from '../../../components/AppValidateForm';

const RgisterFormView = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={[{paddingTop: top + getSize.v(37)}, styles.container]}>
      <AppTitleHeader
        title="Congratulations"
        titleStyle={textStyle.header.hb6}
        content="on verifying the email belongs to you"
        contentStyle={[textStyle.header.h7, {color: COLOR.text.header.brand}]}
        containerStyle={styles.headerContainer}
      />

      <AppTitleHeader
        title="Sign Up"
        titleStyle={textStyle.header.h3}
        content="on verifying the email belongs to you"
        contentStyle={[textStyle.header.h7, {color: COLOR.text.header.brand}]}
        containerStyle={[styles.headerContainer, styles.subHeaderContainer]}
      />

      <AppValidateForm/>
    </View>
  );
};

export default RgisterFormView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: getSize.s(30),
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: getSize.v(42),
  },
  subHeaderContainer: {
    marginBottom: getSize.v(32),
  },
});
