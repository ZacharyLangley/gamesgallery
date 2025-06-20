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
import { useBlackjackStore } from './store/useBlackjackStore';
import { GamePhase } from './types';
import { styles } from './styles';
import { calculateHandValue } from './utils';

export const Blackjack = memo(() => {
  const {
    playerHand,
    dealerHand,
    currentBet,
    pendingBet,
    playerBalance,
    gamePhase,
    result,
    canDoubleDown,
    canInsurance,
    cardCount,
    addToBet,
    clearBet,
    submitBet,
    hit,
    stand,
    doubleDown,
    takeInsurance,
    continueGame,
    resetGame,
  } = useBlackjackStore();

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

  const handleAllIn = useCallback(() => {
    addToBet(playerBalance);
  }, [addToBet, playerBalance]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        playerBalance={playerBalance}
        currentBet={currentBet}
        pendingBet={pendingBet}
        cardCount={cardCount}
      />

      <GameResult result={result} />

      <Hand
        cards={dealerHand.cards}
        title={"Dealer's Hand"}
        total={dealerHandTotal}
        showTotal={isGameOver}
      />

      <Hand
        cards={playerHand.cards}
        title={'Your Hand'}
        total={playerHand.total}
        showTotal={true}
      />

      <View style={styles.controlsContainer}>
        {isBetting && (
          <BettingControls
            playerBalance={playerBalance}
            pendingBet={pendingBet}
            onAddToBet={addToBet}
            onSubmitBet={submitBet}
            onClearBet={clearBet}
            onAllIn={handleAllIn}
          />
        )}

        {isPlayerTurn && (
          <GameControls
            canDoubleDown={canDoubleDown}
            canInsurance={canInsurance}
            onHit={hit}
            onStand={stand}
            onDoubleDown={doubleDown}
            onTakeInsurance={takeInsurance}
          />
        )}

        {isGameOver && <GameOverControls onContinue={continueGame} />}
      </View>

      <ResetButton onReset={resetGame} />
    </SafeAreaView>
  );
});
