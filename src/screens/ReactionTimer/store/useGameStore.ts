import { create } from 'zustand';
import { GameStore } from '../types';
import { CONSTANTS } from './constants';
import { getRandomDelay, updateHighScores } from './utils';

export const useGameStore = create<GameStore>((set, get) => ({
  state: 'instruction',
  scores: [],
  currentTime: 0,
  startTime: null,
  loading: false,
  count: 3,

  actions: {
    startGame: () => {
      set({ state: 'countdown', loading: true, count: 3 });

      const startCountdown = (currentCount: number) => {
        if (currentCount > 0) {
          set({ count: currentCount });
          setTimeout(() => startCountdown(currentCount - 1), CONSTANTS.TIMING.COUNTDOWN_DURATION);
        } else {
          setTimeout(() => {
            set({
              state: 'ready',
              startTime: Date.now(),
              loading: false,
            });
          }, getRandomDelay());
        }
      };

      startCountdown(3);
    },

    handleTap: () => {
      const { state, startTime } = get();

      if (state !== 'ready') return;

      const endTime = Date.now();
      const reactionTime = startTime ? endTime - startTime : 0;

      if (reactionTime > CONSTANTS.TIMING.MAX_REACTION_TIME) {
        set({
          state: 'result',
          currentTime: reactionTime,
          startTime: null,
        });
        return;
      }

      set(state => ({
        state: 'result',
        currentTime: reactionTime,
        startTime: null,
        scores: updateHighScores(state.scores, reactionTime),
      }));
    },

    resetGame: () => {
      set({
        state: 'instruction',
        currentTime: 0,
        startTime: null,
        scores: [],
        count: 3,
      });
    },

    tryAgain: () => {
      set({
        state: 'instruction',
        currentTime: 0,
        startTime: null,
        count: 3,
      });
    },
  },
}));
