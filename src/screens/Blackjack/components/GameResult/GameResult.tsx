import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { GameResultProps } from './types';
import { getResultColor, getResultMessage } from './utils';
import { useBlackjack } from '../../hooks/useBlackjack';

export const GameResult: React.FC<GameResultProps> = memo(() => {
  const { result } = useBlackjack();
  if (!result) return null;

  return (
    <View style={styles.resultContainer}>
      <Text style={[styles.resultText, { color: getResultColor(result) }]}>
        {getResultMessage(result)}
      </Text>
    </View>
  );
});

GameResult.displayName = 'GameResult';
