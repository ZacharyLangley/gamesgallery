import React, { memo } from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const RockPaperScissors = memo(() => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{'Rock Paper Scissors'}</Text>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
