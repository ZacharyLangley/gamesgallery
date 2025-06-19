import { CardSuit, CardValue } from '../../types';

export interface CardProps {
  suit: CardSuit;
  value: CardValue;
  width?: number;
  height?: number;
}
