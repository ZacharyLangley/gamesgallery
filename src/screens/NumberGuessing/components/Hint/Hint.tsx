import React, { memo, useMemo } from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowUp, faArrowDown, faDotCircle } from '@fortawesome/free-solid-svg-icons';

import { useGame } from '../../hooks';
import type { HintType } from './types';
import { styles } from './styles';

const wayTooHigh = { icon: faArrowUp, color: '#FF3B30', text: 'Way Too High!' };
const tooHigh = { icon: faArrowUp, color: '#FF9500', text: 'Too High!' };
const high = { icon: faArrowUp, color: '#FFCC00', text: 'High' };
const nearby = { icon: faDotCircle, color: '#4CD964', text: 'Nearby!' };
const low = { icon: faArrowDown, color: '#FFCC00', text: 'Low' };
const tooLow = { icon: faArrowDown, color: '#FF9500', text: 'Too Low!' };
const wayTooLow = { icon: faArrowDown, color: '#FF3B30', text: 'Way Too Low!' };

const getHintConfig = (type: HintType) => {
  switch (type) {
    case 'way-too-high':
      return wayTooHigh;
    case 'too-high':
      return tooHigh;
    case 'high':
      return high;
    case 'nearby':
      return nearby;
    case 'low':
      return low;
    case 'too-low':
      return tooLow;
    case 'way-too-low':
      return wayTooLow;
    default:
      return null;
  }
};

export const Hint = memo(() => {
  const { hint } = useGame();
  const config = useMemo(() => getHintConfig(hint), [hint]);

  if (!config) return null;

  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={config.icon} size={24} color={config.color} />
      <Text style={[styles.text, { color: config.color }]}>{config.text}</Text>
    </View>
  );
});
