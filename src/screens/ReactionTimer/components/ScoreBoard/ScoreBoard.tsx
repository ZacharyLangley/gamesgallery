import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { useGame } from '../../hooks';

export const ScoreBoard = memo(() => {
  const { scores, currentTime } = useGame();
  const formatTime = (time: number) => `${(time / 1000).toFixed(3)}s`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 5 Scores</Text>
      {scores.map((score, index) => (
        <Text
          key={score.timestamp}
          style={[styles.score, currentTime === score.time && styles.highlighted]}>
          {`${index + 1}. ${formatTime(score.time)}`}
        </Text>
      ))}
    </View>
  );
});

ScoreBoard.displayName = 'ScoreBoard';
