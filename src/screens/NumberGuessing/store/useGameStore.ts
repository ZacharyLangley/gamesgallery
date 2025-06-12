import { create } from 'zustand';
import type { GameStore } from './types';
import { HintType } from '../components/Hint/types';

export const useGameStore = create<GameStore>((set, get) => ({
  computerNumber: Math.floor(Math.random() * 100) + 1,
  attempts: 0,
  maxAttempts: 10,
  gameWon: false,
  gameOver: false,
  hint: null,
  currentGuess: '',
  lastGuessResult: null,

  actions: {
    generateNumber: () => {
      set({ computerNumber: Math.floor(Math.random() * 100) + 1 });
    },

    setHint: (hint: HintType) => {
      set({ hint });
    },

    setCurrentGuess: (currentGuess: string) => {
      set({ currentGuess });
    },

    setLastGuessResult: (lastGuessResult: string | null) => {
      set({ lastGuessResult });
    },

    makeGuess: (guess: number) => {
      const { computerNumber, attempts, maxAttempts } = get();
      const diff = guess - computerNumber;
      const absDiff = Math.abs(diff);

      set({ attempts: attempts + 1 });

      if (guess === computerNumber) {
        set({
          gameWon: true,
          gameOver: true,
          hint: 'correct',
          lastGuessResult: 'correct',
        });
        return;
      }

      if (attempts + 1 >= maxAttempts) {
        set({ gameOver: true });
        return;
      }

      let newHint: HintType = null;
      if (diff > 50) newHint = 'way-too-high';
      else if (diff > 25) newHint = 'too-high';
      else if (diff > 10) newHint = 'high';
      else if (absDiff <= 10) newHint = 'nearby';
      else if (diff < -50) newHint = 'way-too-low';
      else if (diff < -25) newHint = 'too-low';
      else newHint = 'low';

      set({
        hint: newHint,
        currentGuess: '',
        lastGuessResult: newHint,
      });
    },

    resetGame: () => {
      set({
        computerNumber: Math.floor(Math.random() * 100) + 1,
        attempts: 0,
        gameWon: false,
        gameOver: false,
        hint: null,
        currentGuess: '',
        lastGuessResult: null,
      });
    },
  },
}));
