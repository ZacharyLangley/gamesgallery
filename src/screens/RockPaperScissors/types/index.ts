export type Choice = 'rock' | 'paper' | 'scissors';

export type GameActions = {
  resetGame: () => void;
  setPlayerChoice: (choice: Choice) => void;
  makeComputerChoice: () => void;
  handleChoice: (choice: Choice) => void;
};

export type GameState = {
  playerChoice: Choice | null;
  computerChoice: Choice | null;
  playerScore: number;
  computerScore: number;
  isSelecting: boolean;
  loading: boolean;
  actions: GameActions;
};
