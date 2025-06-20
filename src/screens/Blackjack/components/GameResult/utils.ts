import { GameResult as GameResultType } from '../../types';

export const getResultMessage = (result: GameResultType): string => {
  switch (result) {
    case GameResultType.PLAYER_WIN:
      return 'You Win!';
    case GameResultType.DEALER_WIN:
      return 'Dealer Wins!';
    case GameResultType.PUSH:
      return 'Push!';
    case GameResultType.PLAYER_BLACKJACK:
      return 'Blackjack! You Win!';
    case GameResultType.DEALER_BLACKJACK:
      return 'Dealer Blackjack!';
    default:
      return '';
  }
};

export const getResultColor = (result: GameResultType): string => {
  switch (result) {
    case GameResultType.PLAYER_WIN:
    case GameResultType.PLAYER_BLACKJACK:
      return '#4CAF50';
    case GameResultType.DEALER_WIN:
    case GameResultType.DEALER_BLACKJACK:
      return '#F44336';
    case GameResultType.PUSH:
      return '#FF9800';
    default:
      return '#333';
  }
};
