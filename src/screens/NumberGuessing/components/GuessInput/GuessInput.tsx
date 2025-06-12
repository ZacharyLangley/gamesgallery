import React, { memo, useState, useCallback, useMemo } from 'react';
import { View, TextInput } from 'react-native';

import { useGame, useGameActions } from '../../hooks';
import { Result } from '../Result/Result';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import { styles } from './styles';

export const GuessInput = memo(() => {
  const { gameWon, gameOver, currentGuess, lastGuessResult } = useGame();
  const { makeGuess, setCurrentGuess } = useGameActions();

  const [isFocused, setIsFocused] = useState(false);

  const inputStyle = useMemo(
    () => [
      styles.input,
      isFocused && styles.inputFocused,
      lastGuessResult === 'correct' && styles.inputCorrect,
      lastGuessResult && lastGuessResult !== 'correct' && styles.inputWrong,
    ],
    [isFocused, lastGuessResult],
  );

  const handleSubmit = useCallback(() => {
    const numGuess = parseInt(currentGuess, 10);
    if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) return;
    makeGuess(numGuess);
  }, [currentGuess, makeGuess]);

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  if (gameWon) return <Result />;
  else {
    return (
      <View style={styles.container}>
        <TextInput
          style={inputStyle}
          value={currentGuess}
          onChangeText={setCurrentGuess}
          keyboardType="number-pad"
          maxLength={3}
          placeholder="1-100"
          onFocus={onFocus}
          onBlur={onBlur}
          onSubmitEditing={handleSubmit}
          editable={!gameOver}
        />
        <SubmitButton />
      </View>
    );
  }
});
