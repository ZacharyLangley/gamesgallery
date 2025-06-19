import { CardSuit, CardValue } from '../../types';

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

export const getDisplayValue = (value: CardValue): string => {
  switch (value) {
    case CardValue.ACE:
      return 'A';
    case CardValue.JACK:
      return 'J';
    case CardValue.QUEEN:
      return 'Q';
    case CardValue.KING:
      return 'K';
    default:
      return value;
  }
};
