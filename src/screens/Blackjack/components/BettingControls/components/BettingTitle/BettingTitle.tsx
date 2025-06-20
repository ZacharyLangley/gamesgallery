import React, { memo } from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

export const BettingTitle: React.FC = memo(() => {
  return <Text style={styles.bettingTitle}>{'Place Your Bet'}</Text>;
});
