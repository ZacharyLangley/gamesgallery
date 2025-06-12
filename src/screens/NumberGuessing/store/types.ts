import { HintType } from '../components/Hint/types';

export type GameState = {
  computerNumber: number;
  attempts: number;
  maxAttempts: number;
  gameWon: boolean;
  gameOver: boolean;
  hint: HintType;
  currentGuess: string;
  lastGuessResult: string | null;
};

export type GameActions = {
  generateNumber: () => void;
  setHint: (hint: HintType) => void;
  makeGuess: (guess: number) => void;
  resetGame: () => void;
  setCurrentGuess: (guess: string) => void;
  setLastGuessResult: (result: string | null) => void;
};

export type GameStore = GameState & {
  actions: GameActions;
};
