import { create } from 'zustand';
import {
  CardSuit,
  CardValue,
  CardData,
  HandData,
  GamePhase,
  GameResult,
  GameState,
} from '../types';

const createDeck = (): CardData[] => {
  const deck: CardData[] = [];
  const suits = [CardSuit.HEARTS, CardSuit.DIAMONDS, CardSuit.CLUBS, CardSuit.SPADES];
  const values = [
    CardValue.ACE,
    CardValue.TWO,
    CardValue.THREE,
    CardValue.FOUR,
    CardValue.FIVE,
    CardValue.SIX,
    CardValue.SEVEN,
    CardValue.EIGHT,
    CardValue.NINE,
    CardValue.TEN,
    CardValue.JACK,
    CardValue.QUEEN,
    CardValue.KING,
  ];

  for (const suit of suits) {
    for (const value of values) {
      deck.push({ suit, value });
    }
  }
  return deck;
};

const shuffleDeck = (deck: CardData[]): CardData[] => {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i]!;
    shuffled[i] = shuffled[j]!;
    shuffled[j] = temp;
  }
  return shuffled;
};

const calculateHandValue = (cards: CardData[]): number => {
  let total = 0;
  let aces = 0;

  for (const card of cards) {
    if (card.value === CardValue.ACE) {
      aces += 1;
    } else if ([CardValue.JACK, CardValue.QUEEN, CardValue.KING].includes(card.value)) {
      total += 10;
    } else {
      total += parseInt(card.value);
    }
  }

  // Add aces
  for (let i = 0; i < aces; i++) {
    if (total + 11 <= 21) {
      total += 11;
    } else {
      total += 1;
    }
  }

  return total;
};

const evaluateHand = (cards: CardData[]): HandData => {
  const total = calculateHandValue(cards);
  const isBusted = total > 21;
  const isBlackjack = cards.length === 2 && total === 21;

  return {
    cards,
    total,
    isBusted,
    isBlackjack,
  };
};

const determineWinner = (playerHand: HandData, dealerHand: HandData): GameResult => {
  if (playerHand.isBlackjack && !dealerHand.isBlackjack) {
    return GameResult.PLAYER_BLACKJACK;
  }
  if (dealerHand.isBlackjack && !playerHand.isBlackjack) {
    return GameResult.DEALER_BLACKJACK;
  }
  if (playerHand.isBusted) {
    return GameResult.DEALER_WIN;
  }
  if (dealerHand.isBusted) {
    return GameResult.PLAYER_WIN;
  }
  if (playerHand.total > dealerHand.total) {
    return GameResult.PLAYER_WIN;
  }
  if (dealerHand.total > playerHand.total) {
    return GameResult.DEALER_WIN;
  }
  return GameResult.PUSH;
};

const calculatePayout = (result: GameResult, bet: number): number => {
  switch (result) {
    case GameResult.PLAYER_BLACKJACK:
      return bet + Math.floor(bet * 1.5); // Original bet + 3:2 payout
    case GameResult.PLAYER_WIN:
      return bet + bet; // Original bet + 1:1 payout
    case GameResult.PUSH:
      return bet; // Return original bet only
    case GameResult.DEALER_WIN:
    case GameResult.DEALER_BLACKJACK:
      return 0; // Lose bet
    default:
      return 0;
  }
};

interface BlackjackState extends GameState {
  // Additional betting state
  pendingBet: number;

  // Actions
  addToBet: (amount: number) => void;
  clearBet: () => void;
  submitBet: () => void;
  placeBet: (amount: number) => void;
  dealCards: () => void;
  hit: () => void;
  stand: () => void;
  doubleDown: () => void;
  takeInsurance: () => void;
  continueGame: () => void;
  resetGame: () => void;
  newGame: () => void;
}

export const useBlackjackStore = create<BlackjackState>((set, get) => ({
  // Initial state
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
      get().dealCards();
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
      get().dealCards();
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
    const dealerHand = evaluateHand([dealerCard1]); // Only visible card

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

    // Check for blackjack
    if (playerHand.isBlackjack) {
      get().stand();
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
      get().stand();
    }
  },

  stand: () => {
    const { dealerHand, deck, currentBet } = get();
    if (currentBet === 0) return;

    // Reveal dealer's hidden card
    const revealedCards = dealerHand.cards.map(card => ({ ...card, isHidden: false }));
    let newDealerHand = evaluateHand(revealedCards);

    // Dealer plays
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

    get().hit();
    get().stand();
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

    // Shuffle if less than 20 cards remain
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
      playerBalance: 1000, // Reset to starting balance
      gamePhase: GamePhase.BETTING,
      result: undefined,
      canDoubleDown: false,
      canInsurance: false,
      cardCount: 52,
    });
  },

  newGame: () => {
    const { deck, cardCount } = get();

    // Shuffle if less than 20 cards remain
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
}));
