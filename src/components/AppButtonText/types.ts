import { PressableProps, StyleProp, TextStyle } from "react-native";

export type TAppButtonText = {
    title?: string;
    textStyle?: StyleProp<TextStyle>;
  } & PressableProps;
  