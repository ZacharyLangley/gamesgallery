import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';
import { BetActionsProps } from './types';

export const BetActions: React.FC<BetActionsProps> = memo(({ onSubmitBet, onClearBet }) => {
  return (
    <View style={styles.betActions}>
      <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={onSubmitBet}>
        <Icon name="check" size={20} color="white" />
        <Text style={styles.buttonText}>{'Submit Bet'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={onClearBet}>
        <Icon name="times" size={20} color="white" />
        <Text style={styles.buttonText}>{'Clear'}</Text>
      </TouchableOpacity>
    </View>
  );
});

BetActions.displayName = 'BetActions';
