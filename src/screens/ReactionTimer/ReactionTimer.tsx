import React, { memo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScoreBoard, StateView } from './components';
import { styles } from './styles';

export const ReactionTimer = memo(() => {
  return (
    <SafeAreaView style={styles.container}>
      <ScoreBoard />
      <StateView />
    </SafeAreaView>
  );
});
