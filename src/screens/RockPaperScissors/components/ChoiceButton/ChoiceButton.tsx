import React, { memo, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-solid-svg-icons';
import { ChoiceButtonProps } from './types';
import { styles } from './styles';

const icons = {
  rock: faHandRock,
  paper: faHandPaper,
  scissors: faHandScissors,
};

export const ChoiceButton = memo(({ choice, isSelected, onPress, disabled }: ChoiceButtonProps) => {
  const handlePress = useCallback(() => {
    onPress(choice);
  }, [choice, onPress]);

  const color = isSelected ? '#4CAF50' : '#333';

  return (
    <TouchableOpacity
      style={[styles.button, isSelected && styles.selectedButton]}
      onPress={handlePress}
      disabled={disabled}>
      <FontAwesomeIcon icon={icons[choice]} size={32} color={color} />
    </TouchableOpacity>
  );
});
