import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useGameActions } from '../../hooks/useGame';
import { styles } from './styles';

export const ResetButton = memo(() => {
  const { resetGame } = useGameActions();

  return (
    <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
      <Text style={styles.resetText}>Reset Game</Text>
    </TouchableOpacity>
  );
});
