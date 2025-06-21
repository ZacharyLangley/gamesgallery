import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ChipSuit } from '../ChipSuit';
import { AllInChipProps } from './types';
import { styles } from './styles';
import { CardSuit } from 'src/screens/Blackjack/types';

export const AllInChip: React.FC<AllInChipProps> = memo(({ size, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[
        styles.chip,
        styles.allInChip,
        { width: size, height: size, backgroundColor: '#FFD700' },
        disabled && styles.chipDisabled,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <ChipSuit suit={CardSuit.DIAMONDS} position="north" />
      <ChipSuit suit={CardSuit.HEARTS} position="south" />
      <ChipSuit suit={CardSuit.CLUBS} position="east" />
      <ChipSuit suit={CardSuit.SPADES} position="west" />
      <View style={styles.allInCenterText}>
        <Text style={styles.allInText}>{'ALL'}</Text>
        <Text style={styles.allInText}>{'IN'}</Text>
      </View>
    </TouchableOpacity>
  );
});

AllInChip.displayName = 'AllInChip';
