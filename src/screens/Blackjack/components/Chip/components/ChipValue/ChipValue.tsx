import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { ChipValueProps } from './types';

export const ChipValue: React.FC<ChipValueProps> = memo(({ value, innerRingColor }) => {
  return (
    <View style={styles.centerText}>
      <Text style={[styles.valueText, innerRingColor]}>${value}</Text>
    </View>
  );
});

ChipValue.displayName = 'ChipValue';
