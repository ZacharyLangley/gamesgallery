import { memo } from 'react';
import { useTicTacToeStore } from '../../store/useTicTacToeStore';
import { Text } from 'react-native';
import { styles } from './styles';

export const StatusText = memo(() => {
  const { winner, board, currentPlayer } = useTicTacToeStore();
  return winner || board.every(cell => cell) ? (
    <Text style={styles.statusText}>
      {winner !== 'draw' ? `Player ${winner} wins!` : "It's a draw!"}
    </Text>
  ) : (
    <Text style={styles.statusText}>{`Player ${currentPlayer}'s turn`}</Text>
  );
});
