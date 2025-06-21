import { memo } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { BetProps } from './types';

export const Balance = memo(({ label, amount }: BetProps) => {
  return (
    <View style={styles.balanceContainer}>
      <Text style={styles.balanceLabel}>{label}</Text>
      <Text style={styles.balanceAmount}>{`$${amount}`}</Text>
    </View>
  );
});

Balance.displayName = 'Balance';
