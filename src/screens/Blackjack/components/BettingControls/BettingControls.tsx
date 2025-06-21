import React, { memo, useCallback } from 'react';
import { View } from 'react-native';

import { BettingTitle, ChipGrid, AllInChipSection, BetActions } from './components';
import { styles } from './styles';
import { BettingControlsProps } from './types';
import { useBlackjack, useBlackjackActions } from '../../hooks/useBlackjack';

export const BettingControls: React.FC<BettingControlsProps> = memo(({}) => {
  const { playerBalance, pendingBet } = useBlackjack();
  const { addToBet, clearBet, submitBet } = useBlackjackActions();

  const handleAllIn = useCallback(() => {
    addToBet(playerBalance);
  }, [addToBet, playerBalance]);

  return (
    <View style={styles.bettingContainer}>
      <BettingTitle />
      <ChipGrid playerBalance={playerBalance} onAddToBet={addToBet} />
      <AllInChipSection playerBalance={playerBalance} onAllIn={handleAllIn} />
      {pendingBet > 0 && <BetActions onSubmitBet={submitBet} onClearBet={clearBet} />}
    </View>
  );
});

BettingControls.displayName = 'BettingControls';
