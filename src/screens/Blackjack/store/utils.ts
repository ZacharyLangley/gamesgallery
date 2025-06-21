import { CardData, CardSuit, CardValue, GameResult, HandData } from '../types';

export const createDeck = (): CardData[] => {
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

export const shuffleDeck = (deck: CardData[]): CardData[] => {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i]!;
    shuffled[i] = shuffled[j]!;
    shuffled[j] = temp;
  }
  return shuffled;
};

export const calculateHandValue = (cards: CardData[]): number => {
  let total = 0;
  let aces = 0;

  for (const card of cards) {
    if (card.value === CardValue.ACE) {
      aces += 1;
    } else if ([CardValue.JACK, CardValue.QUEEN, CardValue.KING].includes(card.value)) {
      total += 10;
    } else {
      total += parseInt(card.value, 10);
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

export const evaluateHand = (cards: CardData[]): HandData => {
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

export const determineWinner = (playerHand: HandData, dealerHand: HandData): GameResult => {
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

export const calculatePayout = (result: GameResult, bet: number): number => {
  switch (result) {
    case GameResult.PLAYER_BLACKJACK:
      return bet + Math.floor(bet * 1.5);
    case GameResult.PLAYER_WIN:
      return bet + bet;
    case GameResult.PUSH:
      return bet;
    case GameResult.DEALER_WIN:
    case GameResult.DEALER_BLACKJACK:
      return 0;
    default:
      return 0;
  }
};
