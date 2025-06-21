import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { ChipSuitProps } from './types';
import { getSuitColor, getSuitSymbol } from './utils';

export const ChipSuit: React.FC<ChipSuitProps> = memo(({ suit, position }) => {
  return (
    <View style={[styles.suitPosition, styles[position]]}>
      <Text style={[styles.suitText, { color: getSuitColor(suit) }]}>{getSuitSymbol(suit)}</Text>
    </View>
  );
});

ChipSuit.displayName = 'ChipSuit';
