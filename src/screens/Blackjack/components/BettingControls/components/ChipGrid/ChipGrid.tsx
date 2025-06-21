import React, { memo } from 'react';
import { View } from 'react-native';

import { Chip } from '../../../Chip/Chip';
import { styles } from './styles';
import { ChipGridProps } from './types';

export const ChipGrid: React.FC<ChipGridProps> = memo(({ playerBalance, onAddToBet }) => {
  return (
    <View style={styles.chipContainer}>
      <Chip value={1} onPress={() => onAddToBet(1)} disabled={playerBalance < 1} />
      <Chip value={5} onPress={() => onAddToBet(5)} disabled={playerBalance < 5} />
      <Chip value={25} onPress={() => onAddToBet(25)} disabled={playerBalance < 25} />
      <Chip value={100} onPress={() => onAddToBet(100)} disabled={playerBalance < 100} />
    </View>
  );
});

ChipGrid.displayName = 'ChipGrid';
