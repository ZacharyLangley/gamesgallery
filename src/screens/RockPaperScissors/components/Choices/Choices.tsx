import React, { memo } from 'react';
import { View } from 'react-native';

import { ChoiceButton } from '../../components';
import { useGame, useGameActions } from '../../hooks/useGame';
import { choices } from '../../store/constants';
import { styles } from './styles';

export const Choices = memo(() => {
  const { playerChoice, isSelecting } = useGame();
  const { handleChoice } = useGameActions();

  return (
    <View style={styles.choicesContainer}>
      {choices.map(choice => (
        <ChoiceButton
          key={choice}
          choice={choice}
          isSelected={choice === playerChoice}
          onPress={handleChoice}
          disabled={isSelecting}
        />
      ))}
    </View>
  );
});
