import { memo } from 'react';
import { useTicTacToeStore } from '../../store/useTicTacToeStore';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const ScoreBoard = memo(() => {
  const { score } = useTicTacToeStore();
  return (
    <View style={styles.scoreContainer}>
      <Text style={styles.scoreText}>{`Player X: ${score.X}`}</Text>
      <Text style={styles.scoreText}>{`Player O: ${score.O}`}</Text>
    </View>
  );
});

ScoreBoard.displayName = 'ScoreBoard';
