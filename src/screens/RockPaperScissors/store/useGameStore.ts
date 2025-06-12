import { create } from 'zustand';
import { Choice, GameState } from '../types';
import { choices } from './constants';

const determineWinner = (playerChoice: Choice, computerChoice?: Choice) => {
  if (playerChoice === computerChoice) return null;

  const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  return winConditions[playerChoice] === computerChoice ? 'player' : 'computer';
};

export const useGameStore = create<GameState>((set, get) => ({
  playerChoice: null,
  computerChoice: null,
  playerScore: 0,
  computerScore: 0,
  isSelecting: false,
  loading: false,
  actions: {
    handleChoice: (choice: Choice) => {
      set({ playerChoice: choice, isSelecting: true, loading: true });
      setTimeout(() => {
        get().actions.makeComputerChoice();
        set({ loading: false });
      }, 2000);
    },

    resetGame: () => {
      set({
        playerChoice: null,
        computerChoice: null,
        isSelecting: false,
        loading: false,
      });
    },

    setPlayerChoice: (choice: Choice) => {
      set({ playerChoice: choice, isSelecting: true });
    },

    makeComputerChoice: () => {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      const { playerChoice } = get();

      if (!playerChoice) return;

      const winner = determineWinner(playerChoice, randomChoice);

      set(state => ({
        computerChoice: randomChoice,
        isSelecting: false,
        playerScore: winner === 'player' ? state.playerScore + 1 : state.playerScore,
        computerScore: winner === 'computer' ? state.computerScore + 1 : state.computerScore,
      }));
    },
  },
}));
