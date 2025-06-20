import React, { memo } from 'react';

import { AllInChip, RegularChip } from './components';
import { ChipProps } from './types';

export const Chip: React.FC<ChipProps> = memo(({ value, onPress, disabled = false, size = 79 }) => {
  const isAllIn = value === 0;

  if (isAllIn) {
    return <AllInChip size={size} onPress={onPress} disabled={disabled} />;
  }

  return <RegularChip value={value} size={size} onPress={onPress} disabled={disabled} />;
});
