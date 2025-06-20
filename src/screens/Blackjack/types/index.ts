export enum CardSuit {
  HEARTS = 'H',
  DIAMONDS = 'D',
  CLUBS = 'C',
  SPADES = 'S',
}

export enum CardValue {
  ACE = 'A',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
  TEN = '10',
  JACK = 'J',
  QUEEN = 'Q',
  KING = 'K',
}

export interface CardData {
  suit: CardSuit;
  value: CardValue;
  isHidden?: boolean;
}

export interface HandData {
  cards: CardData[];
  total: number;
  isBusted: boolean;
  isBlackjack: boolean;
}

export interface GameState {
  playerHand: HandData;
  dealerHand: HandData;
  deck: CardData[];
  currentBet: number;
  playerBalance: number;
  gamePhase: GamePhase;
  result?: GameResult;
  canDoubleDown: boolean;
  canInsurance: boolean;
  cardCount: number;
}

export enum GamePhase {
  BETTING = 'betting',
  DEALING = 'dealing',
  PLAYER_TURN = 'player_turn',
  DEALER_TURN = 'dealer_turn',
  GAME_OVER = 'game_over',
}

export enum GameResult {
  PLAYER_WIN = 'player_win',
  DEALER_WIN = 'dealer_win',
  PUSH = 'push',
  PLAYER_BLACKJACK = 'player_blackjack',
  DEALER_BLACKJACK = 'dealer_blackjack',
}
