import { StyleProp, TextStyle } from 'react-native';

export interface ChipValueProps {
  value: number;
  innerRingColor?: StyleProp<TextStyle> | null;
}
