import { useGameStore } from '../store/useGameStore';

export const useGameActions = () => useGameStore(state => state.actions);

export const useGame = () => useGameStore(state => state);
