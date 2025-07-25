export type GameState = 'instruction' | 'countdown' | 'waiting' | 'ready' | 'timing' | 'result';

export type Score = {
  time: number;
  timestamp: number;
};

export type GameActions = {
  startGame: () => void;
  handleTap: () => void;
  resetGame: () => void;
  tryAgain: () => void;
};

export type GameStore = {
  state: GameState;
  scores: Score[];
  currentTime: number;
  startTime: number | null;
  loading: boolean;
  count: number;
  actions: GameActions;
};
