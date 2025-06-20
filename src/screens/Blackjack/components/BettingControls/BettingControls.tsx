import React, { memo } from 'react';
import { View } from 'react-native';

import { BettingTitle, ChipGrid, AllInChipSection, BetActions } from './components';
import { styles } from './styles';
import { BettingControlsProps } from './types';

export const BettingControls: React.FC<BettingControlsProps> = memo(
  ({ playerBalance, pendingBet, onAddToBet, onSubmitBet, onClearBet, onAllIn }) => {
    return (
      <View style={styles.bettingContainer}>
        <BettingTitle />
        <ChipGrid playerBalance={playerBalance} onAddToBet={onAddToBet} />
        <AllInChipSection playerBalance={playerBalance} onAllIn={onAllIn} />
        {pendingBet > 0 && <BetActions onSubmitBet={onSubmitBet} onClearBet={onClearBet} />}
      </View>
    );
  },
);
