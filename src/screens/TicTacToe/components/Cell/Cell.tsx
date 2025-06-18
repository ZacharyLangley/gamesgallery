import { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useTicTacToeActions } from '../../hooks/useTicTacToe';
import { useTicTacToeStore } from '../../store/useTicTacToeStore';
import { CELL_SIZE } from '../../constants';
import { styles } from './styles';

export const Cell = memo(({ index }: { index: number }) => {
  const { board, winner } = useTicTacToeStore();
  const { makeMove } = useTicTacToeActions();
  const value = board[index];

  return (
    <TouchableOpacity
      style={styles.cell}
      onPress={() => !winner && !value && makeMove(index)}
      disabled={!!winner || !!value}>
      {value && (
        <Icon
          name={value === 'X' ? 'times' : 'circle-o'}
          size={CELL_SIZE * 0.6}
          color={value === 'X' ? '#FF6B6B' : '#4ECDC4'}
        />
      )}
    </TouchableOpacity>
  );
});

Cell.displayName = 'Cell';
