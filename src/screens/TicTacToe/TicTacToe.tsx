import React, { memo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { ResetButton, Board, ScoreBoard, StatusText } from './components';

export const TicTacToe = memo(() => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{'Tic Tac Toe'}</Text>
      <View style={styles.content}>
        <ScoreBoard />
        <StatusText />
        <Board />
      </View>
      <ResetButton />
    </SafeAreaView>
  );
});

export default TicTacToe;
