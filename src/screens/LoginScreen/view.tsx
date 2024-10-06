import React, { useState } from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {InforSVG, LockSVG, PaperPlaneSVG, UserSVG} from '../../assets/svg';
import AppHeader from '../../components/AppHeader';
import AppTitleHeader from '../../components/AppTitleHeader';
import {COLOR} from '../../utils/colorEnum';
import {getSize} from '../../utils/responsive';
import AppButtonFill from '../../components/AppButtonFill';
import FunctionInput from '../../components/FunctionInput';
import { naviagte } from '../../navigation/NavController';
import { PUBLIC_ROUTES } from '../../navigation/routes';

const LoginScreenView = () => {
  const dispatch = useDispatch();
  const {top} = useSafeAreaInsets();
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <AppHeader
        action={
          <Pressable>
            <InforSVG width={30} height={30} fill={COLOR.icon.normal} />
          </Pressable>
        }
      />
      <AppTitleHeader
        title="WalkPal"
        greeting="Wellcome to"
        content="Let find you a friend to walk you home, shall we ?"
        containerStyle={styles.sloganContainer}
      />

      <View style={styles.inputContainer}>
        <FunctionInput
          lead={
            <View style={styles.svgButton}>
              <UserSVG fill={COLOR.button.royalBlue} />
            </View>
          }
          action={
            <Pressable onPress={()=> naviagte(PUBLIC_ROUTES.REGISTER_SCREEN, {email})} style={styles.svgButton}>
              <PaperPlaneSVG fill={COLOR.button.royalBlue} />
            </Pressable>
          }
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
        />
        <FunctionInput
          lead={
            <View style={styles.svgButton}>
              <LockSVG fill={COLOR.button.royalBlue} />
            </View>
          }
          value={pass}
          onChangeText={setPass}
          placeholder="Password"
          keyboardType="twitter"
          secureTextEntry
        />
      </View>

      <AppButtonFill onPress={() => naviagte("AuthStack")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: getSize.s(16),
  },
  inputContainer: {
    gap: 15,
    marginBottom: getSize.v(24),
  },
  sloganContainer: {
    marginTop: getSize.v(100),
    marginBottom: getSize.v(32),
    paddingRight: getSize.s(20),
  },
  svgButton: {
    width: getSize.v(45),
    height: getSize.v(45),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.text.input.view
  },
});
export default LoginScreenView;
