import { TextStyle, ViewStyle } from "react-native";

export type TTitlePosition = 'left' | 'center' | 'right';

export type TAppHeader = {
    titleContent?: React.ReactNode;
    title?: string;
    lead?: React.ReactNode;
    action?: React.ReactNode[] | React.ReactNode;
    onLead?: () => void;
    onAction?: (index: number) => void;
    titlePosition?: TTitlePosition;
    titleStyle?: TextStyle | TextStyle[];
    containerStyle?: ViewStyle | ViewStyle[];
  };