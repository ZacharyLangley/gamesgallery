import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CONSTANTS } from '../../store/constants';
import { styles } from './styles';
import { useGame, useGameActions } from '../../hooks';

export const Result = memo(() => {
  const { currentTime } = useGame();
  const { tryAgain } = useGameActions();
  const isTimeout = currentTime > CONSTANTS.TIMING.MAX_REACTION_TIME;
  const formattedTime = `${(currentTime / 1000).toFixed(3)}s`;

  return (
    <View style={styles.container}>
      {isTimeout ? (
        <Text style={styles.message}>{'We are very disappointed in you...'}</Text>
      ) : (
        <Text style={styles.time}>{formattedTime}</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={tryAgain}>
        <Text style={styles.buttonText}>{'Try Again'}</Text>
      </TouchableOpacity>
    </View>
  );
});

Result.displayName = 'Result';
