import { Controller, useForm } from 'react-hook-form';
import { Alert, StyleSheet, View } from 'react-native';
import { COLOR } from '../../utils/colorEnum';
import { getSize } from '../../utils/responsive';
import { textStyle } from '../../utils/textStyle';
import AppButtonFill from '../AppButtonFill';
import FunctionInput from '../FunctionInput';
import { IFormField } from './type';
import { naviagte } from '../../navigation/NavController';
import { PUBLIC_ROUTES } from '../../navigation/routes';

const initialValue: IFormField = {
  firstName: '',
  lastName: '',
  email: '',
  passcode: '',
  confirmPasscode: '',
};

export default function SignUpForm() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: initialValue,
  });

  const onSubmit = (data: any) => {
    if (data.passcode !== data.confirmPasscode) {
      Alert.alert('Error', 'Passcodes do not match');
      return;
    }
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <FunctionInput
              placeholder="First name"
              onBlur={onBlur}
              viewStyle={styles.rowItemFlex}
              onChangeText={onChange}
              value={value}
              error={errors.firstName}
              errMess="This is required."
            />
          )}
          name="firstName"
        />

        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <FunctionInput
              placeholder="Last name"
              onBlur={onBlur}
              viewStyle={styles.rowItemFlex}
              onChangeText={onChange}
              value={value}
              error={errors.firstName}
              errMess="This is required."
            />
          )}
          name="lastName"
        />
      </View>

      <Controller
        control={control}
        rules={{
          required: true,
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: 'Invalid email format',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <FunctionInput
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={errors.firstName}
            errMess={errors.email?.message || 'Email is required.'}
            keyboardType="email-address"
          />
        )}
        name="email"
      />

      <Controller
        control={control}
        rules={{required: true, minLength: 4}}
        render={({field: {onChange, onBlur, value}}) => (
          <FunctionInput
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={errors.firstName}
            errMess="Passcode is required (min length 4)."
            secureTextEntry
          />
        )}
        name="passcode"
      />

      <Controller
        control={control}
        rules={{required: true, minLength: 4}}
        render={({field: {onChange, onBlur, value}}) => (
          <FunctionInput
            placeholder="Confrim Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={errors.firstName}
            errMess="Passcode is required (min length 4)."
            secureTextEntry
          />
        )}
        name="confirmPasscode"
      />

      <View style={styles.rowItemFlex} />

      <AppButtonFill
        onPress={()=> {
          naviagte(PUBLIC_ROUTES.SELECT_USER_TYPE, {id: 'adva'})
        }}
        // onPress={handleSubmit(onSubmit)}
        title="Submit"
        textStyles={textStyle.button.fill.capture}
        style={styles.buttonSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    gap: getSize.v(12),
  },
  row: {
    gap: getSize.s(8),
    flexDirection: 'row',
  },
  rowItemFlex: {
    flex: 1,
  },
  buttonSubmit: {
    position: 'absolute',
    top: getSize.v(320),
    left: 0,
    right: 0,
    backgroundColor: COLOR.button.royalBlue,
    paddingTop: getSize.v(8),
    paddingBottom: getSize.v(8),
    alignItems: 'center',
    borderRadius: 16,
  },
});
