import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';
import { GameControlsProps } from './types';
import { useBlackjack, useBlackjackActions } from '../../hooks/useBlackjack';

export const GameControls: React.FC<GameControlsProps> = memo(() => {
  const { canDoubleDown, canInsurance } = useBlackjack();
  const { hit, stand, doubleDown, takeInsurance } = useBlackjackActions();

  return (
    <View style={styles.gameControls}>
      <TouchableOpacity style={[styles.button, styles.hitButton]} onPress={hit}>
        <Icon name="plus" size={20} color="white" />
        <Text style={styles.buttonText}>Hit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.standButton]} onPress={stand}>
        <Icon name="hand-stop-o" size={20} color="white" />
        <Text style={styles.buttonText}>Stand</Text>
      </TouchableOpacity>

      {canDoubleDown && (
        <TouchableOpacity style={[styles.button, styles.doubleButton]} onPress={doubleDown}>
          <Icon name="angle-double-up" size={20} color="white" />
          <Text style={styles.buttonText}>Double</Text>
        </TouchableOpacity>
      )}

      {canInsurance && (
        <TouchableOpacity style={[styles.button, styles.insuranceButton]} onPress={takeInsurance}>
          <Icon name="shield" size={20} color="white" />
          <Text style={styles.buttonText}>Insurance</Text>
        </TouchableOpacity>
      )}
    </View>
  );
});

GameControls.displayName = 'GameControls';
