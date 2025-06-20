import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { ChipSuit } from '../ChipSuit';
import { ChipValue } from '../ChipValue';
import { getChipColor, getChipInnerRingColor, getChipSuit, getSuitSymbol } from './utils';
import { styles } from './styles';
import { RegularChipProps } from './types';

export const RegularChip: React.FC<RegularChipProps> = memo(
  ({ value, size, onPress, disabled }) => {
    const chipColor = getChipColor(value);
    const chipInnerRingColor = getChipInnerRingColor(value);
    const suit = getChipSuit(value);
    const suitSymbol = getSuitSymbol(suit);

    return (
      <TouchableOpacity
        style={[
          styles.chip,
          { width: size, height: size, backgroundColor: chipColor },
          disabled && styles.chipDisabled,
        ]}
        onPress={onPress}
        disabled={disabled}>
        <ChipSuit suit={suitSymbol} position="north" />
        <ChipSuit suit={suitSymbol} position="south" />
        <ChipSuit suit={suitSymbol} position="east" />
        <ChipSuit suit={suitSymbol} position="west" />
        <ChipValue value={value} innerRingColor={chipInnerRingColor} />
      </TouchableOpacity>
    );
  },
);
