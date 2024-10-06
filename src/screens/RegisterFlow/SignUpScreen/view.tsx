import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppTitleHeader from '../../../components/AppTitleHeader';
import {getSize} from '../../../utils/responsive';
import {textStyle} from '../../../utils/textStyle';
import FunctionInput from '../../../components/FunctionInput';
import {COLOR} from '../../../utils/colorEnum';
import AppButtonFill from '../../../components/AppButtonFill';
import AppButtonText from '../../../components/AppButtonText';
import {naviagte, popToTop} from '../../../navigation/NavController';
import { PUBLIC_ROUTES } from '../../../navigation/routes';

type TDataProps = {
  email?: string;
};

const RegisterView = ({email = ''}: TDataProps) => {
  const [emails, setEmail] = useState<string>(email);
  const [confirm, setConfirm] = useState<string>('');
  const {top} = useSafeAreaInsets();

  const verifyEmailOTP = () => {
    console.log(PUBLIC_ROUTES.FORM_REGISTER_SCREEN)
    naviagte(PUBLIC_ROUTES.FORM_REGISTER_SCREEN, {email})
  }
  return (
    <View style={[{paddingTop: top}, styles.container]}>
      <AppTitleHeader title="Sign Up" containerStyle={styles.sloganContainer} />

      <Text style={[textStyle.title.labelCAP]}>Verify through Email</Text>
      <View style={styles.inputGroup}>
        <FunctionInput
          placeholder="Input your email"
          value={emails}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <View style={styles.confirmGroup}>
          <FunctionInput
            value={confirm}
            placeholder="Input verify code here"
            viewStyle={{flex: 1, borderRadius: 15}}
            onChangeText={setConfirm}
            keyboardType="email-address"
          />
          <AppButtonFill
            title="Get code"
            textStyles={[textStyle.button.fill.capture, styles.labelButton]}
            styleButton={styles.confimButton}
          />
        </View>
      </View>
      <AppButtonFill
        title="Verify"
        textStyles={[textStyle.button.fill.capture, styles.labelButton]}
        styleButton={styles.verifyButton}
        onPress={verifyEmailOTP}
      />

      <AppButtonText
        textStyle={textStyle.title.context}
        title="Back to Login"
        style={styles.textButton}
        onPress={popToTop}
      />
    </View>
  );
};

export default RegisterView;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: getSize.s(20),
  },
  sloganContainer: {
    marginTop: getSize.v(100),
    marginBottom: getSize.v(32),
    paddingRight: getSize.s(20),
  },
  inputGroup: {
    gap: getSize.v(12),
    marginTop: getSize.v(10),
    marginBottom: getSize.v(21),
  },
  confirmGroup: {
    flexDirection: 'row',
    gap: getSize.v(10),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  confimButton: {
    flex: 1,
    height: getSize.v(45),
    paddingTop: getSize.v(7),
    paddingBottom: getSize.v(10),
  },
  verifyButton: {
    paddingTop: getSize.v(9),
    paddingBottom: getSize.v(8),
    marginBottom: getSize.v(10),
  },
  labelButton: {
    color: COLOR.others.white,
  },
  textButton: {
    alignSelf: 'center',
  },
});
