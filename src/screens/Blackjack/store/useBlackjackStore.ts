import { create } from 'zustand';
import { CardValue, GamePhase, GameState } from '../types';
import { calculatePayout, createDeck, determineWinner, evaluateHand, shuffleDeck } from './utils';
import { BlackjackState } from './types';

export const useBlackjackStore = create<BlackjackState>((set, get) => ({
  playerHand: { cards: [], total: 0, isBusted: false, isBlackjack: false },
  dealerHand: { cards: [], total: 0, isBusted: false, isBlackjack: false },
  deck: createDeck(),
  currentBet: 0,
  pendingBet: 0,
  playerBalance: 1000,
  gamePhase: GamePhase.BETTING,
  result: undefined,
  canDoubleDown: false,
  canInsurance: false,
  cardCount: 52,

  actions: {
    addToBet: (amount: number) => {
      const { playerBalance, pendingBet } = get();
      if (playerBalance >= amount) {
        set({
          pendingBet: pendingBet + amount,
          playerBalance: playerBalance - amount,
        });
      }
    },

    clearBet: () => {
      const { pendingBet } = get();
      set({
        pendingBet: 0,
        playerBalance: get().playerBalance + pendingBet,
      });
    },

    submitBet: () => {
      const { pendingBet } = get();
      if (pendingBet > 0) {
        set({
          currentBet: pendingBet,
          pendingBet: 0,
          gamePhase: GamePhase.DEALING,
        });
        get().actions.dealCards();
      }
    },

    placeBet: (amount: number) => {
      const { playerBalance, currentBet } = get();
      if (playerBalance >= amount && currentBet === 0) {
        set({
          currentBet: amount,
          playerBalance: playerBalance - amount,
          gamePhase: GamePhase.DEALING,
        });
        get().actions.dealCards();
      }
    },

    dealCards: () => {
      const { deck, currentBet } = get();
      if (currentBet === 0) return;

      const shuffledDeck = shuffleDeck(deck);
      const playerCard1 = shuffledDeck.pop();
      const playerCard2 = shuffledDeck.pop();
      const dealerCard1 = shuffledDeck.pop();
      const dealerCard2 = shuffledDeck.pop();

      if (!playerCard1 || !playerCard2 || !dealerCard1 || !dealerCard2) return;

      const playerCards = [playerCard1, playerCard2];
      const dealerCards = [dealerCard1, { ...dealerCard2, isHidden: true }];

      const playerHand = evaluateHand(playerCards);
      const dealerHand = evaluateHand([dealerCard1]);

      const canDoubleDown =
        playerCards.length === 2 && playerHand.total >= 9 && playerHand.total <= 11;
      const canInsurance = dealerCard1.value === CardValue.ACE;

      set({
        playerHand,
        dealerHand: { ...dealerHand, cards: dealerCards },
        deck: shuffledDeck,
        gamePhase: GamePhase.PLAYER_TURN,
        canDoubleDown,
        canInsurance,
        cardCount: shuffledDeck.length,
      });

      if (playerHand.isBlackjack) {
        get().actions.stand();
      }
    },

    hit: () => {
      const { deck, playerHand, currentBet } = get();
      if (currentBet === 0 || playerHand.isBusted) return;

      const newCard = deck.pop();
      if (!newCard) return;

      const newCards = [...playerHand.cards, newCard];
      const newHand = evaluateHand(newCards);

      set({
        playerHand: newHand,
        deck: deck,
        cardCount: deck.length,
        canDoubleDown: false,
      });

      if (newHand.isBusted) {
        get().actions.stand();
      }
    },

    stand: () => {
      const { dealerHand, deck, currentBet } = get();
      if (currentBet === 0) return;

      const revealedCards = dealerHand.cards.map(card => ({ ...card, isHidden: false }));
      let newDealerHand = evaluateHand(revealedCards);

      while (newDealerHand.total < 17 && !newDealerHand.isBusted) {
        const newCard = deck.pop();
        if (!newCard) break;

        const newCards = [...newDealerHand.cards, newCard];
        newDealerHand = evaluateHand(newCards);
      }

      const { playerHand } = get();
      const result = determineWinner(playerHand, newDealerHand);
      const payout = calculatePayout(result, currentBet);

      set({
        dealerHand: newDealerHand,
        deck: deck,
        cardCount: deck.length,
        gamePhase: GamePhase.GAME_OVER,
        result,
        playerBalance: get().playerBalance + payout,
      });
    },

    doubleDown: () => {
      const { playerBalance, currentBet, canDoubleDown } = get();
      if (!canDoubleDown || playerBalance < currentBet) return;

      set({
        playerBalance: playerBalance - currentBet,
        currentBet: currentBet * 2,
      });

      get().actions.hit();
      get().actions.stand();
    },

    takeInsurance: () => {
      const { playerBalance, currentBet, canInsurance } = get();
      if (!canInsurance || playerBalance < currentBet / 2) return;

      set({
        playerBalance: playerBalance - currentBet / 2,
        canInsurance: false,
      });
    },

    continueGame: () => {
      const { deck, cardCount } = get();
      const newDeck = cardCount < 20 ? createDeck() : deck;

      set({
        playerHand: { cards: [], total: 0, isBusted: false, isBlackjack: false },
        dealerHand: { cards: [], total: 0, isBusted: false, isBlackjack: false },
        deck: newDeck,
        currentBet: 0,
        pendingBet: 0,
        gamePhase: GamePhase.BETTING,
        result: undefined,
        canDoubleDown: false,
        canInsurance: false,
        cardCount: newDeck.length,
      });
    },

    resetGame: () => {
      set({
        playerHand: { cards: [], total: 0, isBusted: false, isBlackjack: false },
        dealerHand: { cards: [], total: 0, isBusted: false, isBlackjack: false },
        deck: createDeck(),
        currentBet: 0,
        pendingBet: 0,
        playerBalance: 1000,
        gamePhase: GamePhase.BETTING,
        result: undefined,
        canDoubleDown: false,
        canInsurance: false,
        cardCount: 52,
      });
    },

    newGame: () => {
      const { deck, cardCount } = get();
      const newDeck = cardCount < 20 ? createDeck() : deck;

      set({
        playerHand: { cards: [], total: 0, isBusted: false, isBlackjack: false },
        dealerHand: { cards: [], total: 0, isBusted: false, isBlackjack: false },
        deck: newDeck,
        currentBet: 0,
        pendingBet: 0,
        gamePhase: GamePhase.BETTING,
        result: undefined,
        canDoubleDown: false,
        canInsurance: false,
        cardCount: newDeck.length,
      });
    },
  },
}));
