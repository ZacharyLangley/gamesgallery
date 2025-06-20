import { memo } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { BetProps } from './types';

export const Bet = memo(({ label, amount }: BetProps) => {
  return (
    <View style={styles.betContainer}>
      <Text style={styles.betLabel}>{label}</Text>
      <Text style={styles.betAmount}>{`$${amount}`}</Text>
    </View>
  );
});
