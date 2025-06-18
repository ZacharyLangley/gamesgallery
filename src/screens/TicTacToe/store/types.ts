export type Player = 'X' | 'O';
export type Board = (Player | null)[];
export type GameResult = Player | 'draw' | null;

export interface TicTacToeActions {
  makeMove: (index: number) => void;
  resetGame: () => void;
}

export interface TicTacToeState {
  board: Board;
  currentPlayer: Player;
  winner: GameResult;
  winningCombination: number[] | null;
  score: { X: number; O: number };
  actions: TicTacToeActions;
}
