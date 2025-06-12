import React, { memo } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { useGameActions } from '../../hooks/useGame';
import { styles } from './styles';

export const ResetButton = memo(() => {
  const { resetGame } = useGameActions();

  return (
    <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
      <FontAwesomeIcon icon={faRotateRight} size={24} color="white" />
      <Text style={styles.resetText}>{'Reset Game'}</Text>
    </TouchableOpacity>
  );
});

ResetButton.displayName = 'ResetButton';
