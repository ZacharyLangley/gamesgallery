import { useGameStore } from '../store/useGameStore';

export const useGame = () => useGameStore(state => state);

export const useGameActions = () => useGameStore(state => state.actions);
