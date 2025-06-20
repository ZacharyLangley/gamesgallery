export const getSuitSymbol = (suit: string): string => {
  switch (suit) {
    case '♥':
      return '♥';
    case '♦':
      return '♦';
    case '♣':
      return '♣';
    case '♠':
      return '♠';
    default:
      return '♠';
  }
};

export const getSuitColor = (suit: string): string => {
  return suit === '♥' || suit === '♦' ? '#FF0000' : '#000000';
};
