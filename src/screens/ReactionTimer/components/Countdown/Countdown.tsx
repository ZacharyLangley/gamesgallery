import React, { memo, useEffect, useMemo } from 'react';
import { View, Animated } from 'react-native';
import { CONSTANTS } from '../../store/constants';
import { styles } from './styles';
import { useGame } from '../../hooks';

export const Countdown = memo(() => {
  const { count } = useGame();
  const scaleAnim = useMemo(() => new Animated.Value(0), []);
  const opacityAnim = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    Animated.parallel([
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: CONSTANTS.ANIMATIONS.SCALE_DURATION,
          useNativeDriver: true,
        }),
      ]),
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: CONSTANTS.ANIMATIONS.FADE_DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: CONSTANTS.ANIMATIONS.FADE_DURATION,
          useNativeDriver: true,
          delay: CONSTANTS.ANIMATIONS.SCALE_DURATION - CONSTANTS.ANIMATIONS.FADE_DURATION,
        }),
      ]),
    ]).start();
  }, [count, opacityAnim, scaleAnim]);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.number,
          {
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnim,
          },
        ]}>
        {count}
      </Animated.Text>
    </View>
  );
});

Countdown.displayName = 'Countdown';
