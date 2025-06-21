import React, { memo } from 'react';
import { View } from 'react-native';

import { Chip } from '../../../Chip/Chip';
import { styles } from './styles';
import { AllInChipSectionProps } from './types';

export const AllInChipSection: React.FC<AllInChipSectionProps> = memo(
  ({ playerBalance, onAllIn }) => {
    return (
      <View style={styles.allInContainer}>
        <Chip
          value={0} // 0 indicates All-In
          onPress={onAllIn}
          disabled={playerBalance === 0}
          size={80}
        />
      </View>
    );
  },
);

AllInChipSection.displayName = 'AllInChipSection';
