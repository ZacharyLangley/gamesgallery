import React, { useEffect, useRef, useMemo } from 'react';
import { Animated } from 'react-native';

import { WinningLineProps } from './types';
import { drawColumnLine, drawDiagnalL2RLine, drawDiagnalR2LLine, drawRowLine } from './utils';
import { styles } from './styles';

export const WinningLine: React.FC<WinningLineProps> = ({ winningCombination, cellSize }) => {
  const lineWidth = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(lineWidth, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  }, [winningCombination, lineWidth, opacity]);

  const lineStyle = useMemo(() => {
    if (winningCombination.length !== 3) return {};

    const [start, middle] = winningCombination;
    const isRow = middle - start === 1;
    const isColumn = middle - start === 3;

    const isDiagL2R = middle - start === 4;
    const isDiagR2L = middle - start === 2;

    if (isRow) return drawRowLine(start, cellSize, lineWidth);
    else if (isColumn) return drawColumnLine(start, cellSize, lineWidth);
    else if (isDiagL2R) return drawDiagnalL2RLine(start, cellSize, lineWidth);
    else if (isDiagR2L) return drawDiagnalR2LLine(start, cellSize, lineWidth);
    else return {};
  }, [winningCombination, cellSize, lineWidth]);

  return <Animated.View style={[styles.line, lineStyle, { opacity }]} />;
};
