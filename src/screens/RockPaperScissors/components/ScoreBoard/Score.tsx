import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { ScoreProps } from './types';

export const Score = memo(({ score, label }: ScoreProps) => {
  return (
    <View style={styles.scoreContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
});
