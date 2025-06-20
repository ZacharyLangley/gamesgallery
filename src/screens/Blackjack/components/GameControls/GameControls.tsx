import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';
import { GameControlsProps } from './types';

export const GameControls: React.FC<GameControlsProps> = memo(
  ({ canDoubleDown, canInsurance, onHit, onStand, onDoubleDown, onTakeInsurance }) => {
    return (
      <View style={styles.gameControls}>
        <TouchableOpacity style={[styles.button, styles.hitButton]} onPress={onHit}>
          <Icon name="plus" size={20} color="white" />
          <Text style={styles.buttonText}>Hit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.standButton]} onPress={onStand}>
          <Icon name="hand-stop-o" size={20} color="white" />
          <Text style={styles.buttonText}>Stand</Text>
        </TouchableOpacity>

        {canDoubleDown && (
          <TouchableOpacity style={[styles.button, styles.doubleButton]} onPress={onDoubleDown}>
            <Icon name="angle-double-up" size={20} color="white" />
            <Text style={styles.buttonText}>Double</Text>
          </TouchableOpacity>
        )}

        {canInsurance && (
          <TouchableOpacity
            style={[styles.button, styles.insuranceButton]}
            onPress={onTakeInsurance}>
            <Icon name="shield" size={20} color="white" />
            <Text style={styles.buttonText}>Insurance</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  },
);
