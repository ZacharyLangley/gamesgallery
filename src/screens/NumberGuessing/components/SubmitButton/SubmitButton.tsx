import React, { memo, useCallback } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { useGame, useGameActions } from '../../hooks';
import { styles } from './styles';

export const SubmitButton = memo(() => {
  const { currentGuess } = useGame();
  const { makeGuess } = useGameActions();
  const onPress = useCallback(() => {
    makeGuess(parseInt(currentGuess, 10));
  }, [currentGuess, makeGuess]);

  return (
    <TouchableOpacity style={styles.submitButton} onPress={onPress}>
      <Text style={styles.submitText}>{'Submit Guess'}</Text>
    </TouchableOpacity>
  );
});

SubmitButton.displayName = 'SubmitButton';
