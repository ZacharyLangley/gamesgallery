import React, { memo } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { useGame } from '../../hooks/useGame';
import { styles } from './styles';

export const Result = memo(() => {
  const { playerChoice, computerChoice, loading } = useGame();

  if (loading)
    return (
      <View style={styles.resultContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  if (!playerChoice || !computerChoice) return null;
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.choiceText}>{`You chose: ${playerChoice}`}</Text>
      <Text style={styles.choiceText}>{`Computer chose: ${computerChoice}`}</Text>
    </View>
  );
});
