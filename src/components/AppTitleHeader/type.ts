import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type TAppTitleHeaderProps = {
  containerStyle?: StyleProp<ViewStyle>;
  greeting?: string;
  greetStyle?: StyleProp<TextStyle>;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  content?: string;
  contentStyle?: StyleProp<TextStyle>;
};
