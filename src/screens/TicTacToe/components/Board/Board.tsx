import { memo } from 'react';
import { View } from 'react-native';
import { CELL_SIZE } from '../../constants';
import { useTicTacToeStore } from '../../store/useTicTacToeStore';
import { WinningLine } from '../WinningLine/WinningLine';
import { Cell } from '../Cell/Cell';
import { styles } from './styles';

export const Board = memo(() => {
  const { board, winningCombination } = useTicTacToeStore();
  return (
    <View style={styles.board}>
      {board.map((_, index) => (
        <Cell key={index} index={index} />
      ))}
      {winningCombination && (
        <WinningLine winningCombination={winningCombination} cellSize={CELL_SIZE} />
      )}
    </View>
  );
});

Board.displayName = 'Board';
