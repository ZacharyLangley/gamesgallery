import React, { memo, useCallback, useMemo } from 'react';
import { View, SafeAreaView } from 'react-native';

import {
  Hand,
  Header,
  GameResult,
  BettingControls,
  GameControls,
  GameOverControls,
  ResetButton,
} from './components';
import { useBlackjack, useBlackjackActions } from './hooks/useBlackjack';
import { GamePhase } from './types';
import { styles } from './styles';
import { calculateHandValue } from './utils';

export const Blackjack = memo(() => {
  const { playerHand, dealerHand, gamePhase } = useBlackjack();
  const { continueGame, resetGame } = useBlackjackActions();

  const isPlayerTurn = gamePhase === GamePhase.PLAYER_TURN;
  const isGameOver = gamePhase === GamePhase.GAME_OVER;
  const isBetting = gamePhase === GamePhase.BETTING;

  const dealerHandTotal = useMemo(() => {
    return isGameOver
      ? dealerHand.total
      : dealerHand.cards.filter(c => !c.isHidden).length > 0
      ? calculateHandValue(dealerHand.cards.filter(c => !c.isHidden))
      : 0;
  }, [dealerHand.cards, dealerHand.total, isGameOver]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <GameResult />
      <DealerHand isGameOver={isGameOver} />
      <PlayerHand />
      <View style={styles.controlsContainer}>
        {isBetting && <BettingControls />}
        {isPlayerTurn && <GameControls />}
        {isGameOver && <GameOverControls onContinue={continueGame} />}
      </View>
      <ResetButton onReset={resetGame} />
    </SafeAreaView>
  );
});

Blackjack.displayName = 'Blackjack';

export const PlayerHand = memo(() => {
  const { playerHand } = useBlackjack();
  return (
    <Hand cards={playerHand.cards} title={'Your Hand'} total={playerHand.total} showTotal={true} />
  );
});

PlayerHand.displayName = 'PlayerHand';

export const DealerHand = memo(({ isGameOver }: { isGameOver: boolean }) => {
  const { dealerHand } = useBlackjack();
  const dealerHandTotal = useMemo(() => {
    return isGameOver
      ? dealerHand.total
      : dealerHand.cards.filter(c => !c.isHidden).length > 0
      ? calculateHandValue(dealerHand.cards.filter(c => !c.isHidden))
      : 0;
  }, [dealerHand.cards, dealerHand.total, isGameOver]);
  return (
    <Hand
      cards={dealerHand.cards}
      title={"Dealer's Hand"}
      total={dealerHandTotal}
      showTotal={isGameOver}
    />
  );
});

DealerHand.displayName = 'DealerHand';
