import React, { memo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useGameActions } from '../../hooks';

type Props = {
  isReady: boolean;
};

export const GameScreen = memo(({ isReady }: Props) => {
  const { handleTap } = useGameActions();
  return (
    <TouchableOpacity
      style={[styles.container, isReady && styles.ready]}
      onPress={handleTap}
      activeOpacity={1}>
      <View style={styles.content} />
    </TouchableOpacity>
  );
});

GameScreen.displayName = 'GameScreen';
