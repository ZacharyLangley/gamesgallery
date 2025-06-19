import { Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
export const CARD_WIDTH = screenWidth * 0.15;
export const CARD_HEIGHT = CARD_WIDTH * 1.4;
