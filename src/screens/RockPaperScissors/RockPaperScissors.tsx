import React, { memo } from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScoreBoard, ResetButton, Result, Choices } from './components';
import { styles } from './styles';

export const RockPaperScissors = memo(() => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{'Rock Paper Scissors'}</Text>
      <ScoreBoard />
      <Result />
      <Choices />
      <ResetButton />
    </SafeAreaView>
  );
});
