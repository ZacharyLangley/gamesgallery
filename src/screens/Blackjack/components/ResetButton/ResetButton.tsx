import React, { memo } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';
import { ResetButtonProps } from './types';

export const ResetButton: React.FC<ResetButtonProps> = memo(({ onReset }) => {
  return (
    <TouchableOpacity style={styles.resetButton} onPress={onReset}>
      <Icon name="refresh" size={24} color="#333" />
      <Text style={styles.resetText}>New Game</Text>
    </TouchableOpacity>
  );
});

ResetButton.displayName = 'ResetButton';
