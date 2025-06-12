import { useCallback, useMemo } from 'react';
import { useGameStore } from '../store/useGameStore';
import { CONSTANTS } from '../store/constants';

export const useGame = () => {
  const state = useGameStore(state => state);
  const actions = useGameStore(state => state.actions);

  const isTimeout = useMemo(
    () => state.currentTime > CONSTANTS.TIMING.MAX_REACTION_TIME,
    [state.currentTime],
  );

  const formattedTime = useMemo(
    () => `${(state.currentTime / 1000).toFixed(3)}s`,
    [state.currentTime],
  );

  const handleStart = useCallback(() => {
    actions.startGame();
  }, [actions]);

  const handleTap = useCallback(() => {
    actions.handleTap();
  }, [actions]);

  const handleTryAgain = useCallback(() => {
    actions.tryAgain();
  }, [actions]);

  const handleReset = useCallback(() => {
    actions.resetGame();
  }, [actions]);

  return {
    state: state.state,
    count: state.count,
    scores: state.scores,
    isTimeout,
    formattedTime,
    handleStart,
    handleTap,
    handleTryAgain,
    handleReset,
  };
};
