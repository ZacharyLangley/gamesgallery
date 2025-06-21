import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { Bet, Balance } from './components';
import { styles } from './styles';
import { HeaderProps } from './types';
import { useBlackjack } from '../../hooks/useBlackjack';

export const Header: React.FC<HeaderProps> = memo(() => {
  const { playerBalance, pendingBet, currentBet, cardCount } = useBlackjack();
  return (
    <View style={styles.header}>
      <Balance label="Balance:" amount={playerBalance} />
      {currentBet > 0 && <Bet label="Bet:" amount={currentBet} />}
      {pendingBet > 0 && <Bet label="Pending:" amount={pendingBet} />}
      <Text style={styles.cardCount}>{`Cards: ${cardCount}`}</Text>
    </View>
  );
});

Header.displayName = 'Header';
