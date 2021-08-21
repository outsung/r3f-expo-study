import { TouchableOpacityProps, TextStyle } from 'react-native';

export interface TextButtonProp extends TouchableOpacityProps {
  title: string;
  titleStyle?: TextStyle;
  fixed?: boolean;
}
