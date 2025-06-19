import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { CardProps } from './types';
import { CARD_WIDTH, CARD_HEIGHT } from './constants';
import { getSuitSymbol, getSuitColor, getDisplayValue } from './utils';

export const Card: React.FC<CardProps> = memo(
  ({ suit, value, width = CARD_WIDTH, height = CARD_HEIGHT }) => {
    const suitSymbol = getSuitSymbol(suit);
    const suitColor = getSuitColor(suit);
    const displayValue = getDisplayValue(value);

    return (
      <View style={[styles.card, { width, height }]}>
        <View style={styles.cardContent}>
          <View style={styles.topLeft}>
            <Text style={[styles.value, { color: suitColor }]}>{displayValue}</Text>
            <Text style={[styles.suit, { color: suitColor }]}>{suitSymbol}</Text>
          </View>

          <View style={styles.center}>
            <Text style={[styles.centerSuit, { color: suitColor }]}>{suitSymbol}</Text>
          </View>

          <View style={styles.bottomRight}>
            <Text style={[styles.value, { color: suitColor }]}>{displayValue}</Text>
            <Text style={[styles.suit, { color: suitColor }]}>{suitSymbol}</Text>
          </View>
        </View>
      </View>
    );
  },
);
