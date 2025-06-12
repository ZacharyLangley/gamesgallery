import React, { memo } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GuessInput, Hint, ResetButton } from './components';
import { styles } from './styles';

export const NumberGuessing = memo(() => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{'Number Guessing'}</Text>
      <Hint />
      <GuessInput />
      <ResetButton />
    </SafeAreaView>
  );
});

NumberGuessing.displayName = 'NumberGuessing';
