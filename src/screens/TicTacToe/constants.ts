import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const BOARD_SIZE = width * 0.8;
export const CELL_SIZE = BOARD_SIZE / 3;
