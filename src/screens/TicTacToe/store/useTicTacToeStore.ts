import { create } from 'zustand';
import { TicTacToeState } from './types';
import { WINNING_COMBINATIONS } from './constants';

export const useTicTacToeStore = create<TicTacToeState>((set, get) => ({
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
  winningCombination: null,
  score: { X: 0, O: 0 },
  actions: {
    makeMove: (index: number) => {
      const { board, currentPlayer, winner } = get();
      if (winner || board[index]) return;

      const newBoard = [...board];
      newBoard[index] = currentPlayer;

      const winningCombination = WINNING_COMBINATIONS.find(combination =>
        combination.every((value: number) => newBoard[value] === currentPlayer),
      );

      if (winningCombination) {
        set(state => ({
          board: newBoard,
          winner: currentPlayer,
          winningCombination,
          score: {
            ...state.score,
            [currentPlayer]: state.score[currentPlayer] + 1,
          },
        }));
      } else if (newBoard.every(cell => cell)) {
        set({ board: newBoard, winner: 'draw', winningCombination: null });
      } else {
        set({
          board: newBoard,
          currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
          winningCombination: null,
        });
      }
    },

    resetGame: () => {
      set({
        board: Array(9).fill(null),
        currentPlayer: 'X',
        winner: null,
        winningCombination: null,
      });
    },
  },
}));
