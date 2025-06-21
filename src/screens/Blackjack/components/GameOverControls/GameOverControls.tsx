import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';
import { GameOverControlsProps } from './types';

export const GameOverControls: React.FC<GameOverControlsProps> = memo(({ onContinue }) => {
  return (
    <View style={styles.gameOverControls}>
      <TouchableOpacity style={[styles.button, styles.continueButton]} onPress={onContinue}>
        <Icon name="play" size={20} color="white" />
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
});

GameOverControls.displayName = 'GameOverControls';
