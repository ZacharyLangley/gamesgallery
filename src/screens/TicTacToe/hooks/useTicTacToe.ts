import { useTicTacToeStore } from '../store/useTicTacToeStore';

export const useTicTacToe = () => useTicTacToeStore(state => state);
export const useTicTacToeActions = () => useTicTacToeStore(state => state.actions);
