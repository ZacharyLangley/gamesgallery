import { useBlackjackStore } from '../store/useBlackjackStore';

export const useBlackjack = () => useBlackjackStore(state => state);

export const useBlackjackActions = () => useBlackjackStore(state => state.actions);
