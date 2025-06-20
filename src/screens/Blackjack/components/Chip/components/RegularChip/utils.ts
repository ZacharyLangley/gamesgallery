import { StyleProp, TextStyle } from 'react-native';
import { CardSuit } from '../../../../types';
import { styles } from './styles';

export const getChipSuit = (value: number): CardSuit => {
  switch (value) {
    case 1:
      return CardSuit.SPADES;
    case 5:
      return CardSuit.CLUBS;
    case 25:
      return CardSuit.HEARTS;
    case 100:
      return CardSuit.DIAMONDS;
    default:
      return CardSuit.SPADES;
  }
};

export const getSuitSymbol = (suit: CardSuit): string => {
  switch (suit) {
    case CardSuit.HEARTS:
      return '♥';
    case CardSuit.DIAMONDS:
      return '♦';
    case CardSuit.CLUBS:
      return '♣';
    case CardSuit.SPADES:
      return '♠';
  }
};

export const getSuitColor = (suit: CardSuit): string => {
  return suit === CardSuit.HEARTS || suit === CardSuit.DIAMONDS ? '#FF0000' : '#000000';
};

export const getChipColor = (value: number): string => {
  switch (value) {
    case 1:
      return '#FFFFFF'; // White
    case 5:
      return '#FF0000'; // Red
    case 25:
      return '#008000'; // Green
    case 100:
      return '#0000FF'; // Blue
    default:
      return '#FFD700'; // Gold for All-In
  }
};

export const getChipInnerRingColor = (value: number): StyleProp<TextStyle> | null => {
  switch (value) {
    case 1:
      return styles.oneInnerRing; // White
    case 5:
      return styles.fiveInnerRing; // White
    case 25:
      return styles.twentyFiveInnerRing; // White
    case 100:
      return styles.oneHundredInnerRing; // White
    default:
      return null; // White
  }
};
