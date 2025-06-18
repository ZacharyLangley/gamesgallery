import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useTicTacToeActions } from '../../hooks/useTicTacToe';
import { styles } from './styles';

export const ResetButton = memo(() => {
  const { resetGame } = useTicTacToeActions();
  return (
    <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
      <Icon name="refresh" size={24} color="#333" />
      <Text style={styles.resetText}>{'Reset Game'}</Text>
    </TouchableOpacity>
  );
});

ResetButton.displayName = 'ResetButton';
