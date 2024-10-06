import { PressableProps, StyleProp, TextStyle, ViewStyle } from "react-native";

export type TAppButtonFillProp = {
    title?: string;
    styleButton?: StyleProp<ViewStyle>;
    textStyles?: StyleProp<TextStyle>;
  } & PressableProps;