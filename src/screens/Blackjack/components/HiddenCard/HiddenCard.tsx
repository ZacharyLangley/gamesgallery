import { memo } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { HiddenCardProps } from './types';

export const HiddenCard = memo(({ width, height }: HiddenCardProps) => {
  return (
    <View style={[styles.card, styles.cardBack, { width, height }]}>
      <View style={styles.cardBackPattern}>
        <Text style={styles.cardBackText}>{'ಠ_ಠ'}</Text>
      </View>
    </View>
  );
});
