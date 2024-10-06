import { ReactNode } from "react";
import { FieldError } from "react-hook-form";
import { StyleProp, TextInputProps, ViewStyle } from "react-native";

export type TFunctTextInputProp= {
    lead?: ReactNode;
    action?: ReactNode;
    error?: FieldError | undefined;
    errMess?: string;
    viewStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
  } & TextInputProps;