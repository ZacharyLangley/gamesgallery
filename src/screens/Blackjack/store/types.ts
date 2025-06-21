import { GameState } from '../types';

export interface BlackjackActions {
  addToBet: (amount: number) => void;
  clearBet: () => void;
  submitBet: () => void;
  placeBet: (amount: number) => void;
  dealCards: () => void;
  hit: () => void;
  stand: () => void;
  doubleDown: () => void;
  takeInsurance: () => void;
  continueGame: () => void;
  resetGame: () => void;
  newGame: () => void;
}

export interface BlackjackState extends GameState {
  pendingBet: number;

  actions: BlackjackActions;
}
