import React, { memo } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Score } from './Score';
import { Versus } from './Versus';
import { useGame } from '../../hooks/useGame';

export const ScoreBoard = memo(() => {
  const { playerScore, computerScore } = useGame();

  return (
    <View style={styles.container}>
      <Score score={computerScore} label="Computer" />
      <Versus />
      <Score score={playerScore} label="You" />
    </View>
  );
});
