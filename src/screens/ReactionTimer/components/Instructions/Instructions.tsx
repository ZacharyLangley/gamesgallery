import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { styles } from './styles';
import { useGameActions } from '../../hooks';

export const Instructions = memo(() => {
  const { startGame } = useGameActions();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {'When the screen turns red, tap the screen as fast as you can!'}
      </Text>
      <TouchableOpacity onPress={startGame} style={styles.button}>
        <FontAwesomeIcon icon={faPlay} size={32} color="#333" />
      </TouchableOpacity>
    </View>
  );
});

Instructions.displayName = 'Instructions';
