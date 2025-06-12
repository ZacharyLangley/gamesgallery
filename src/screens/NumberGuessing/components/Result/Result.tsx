import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

import { useGame } from '../../hooks';
import { styles } from './styles';

export const Result = memo(() => {
  const { attempts } = useGame();

  return (
    <View style={[styles.container, styles.winContainer]}>
      <FontAwesomeIcon icon={faTrophy} size={64} color="#FFD700" style={styles.winIcon} />
      <Text style={styles.attemptsText}>
        {`Solved in ${attempts} ${attempts === 1 ? 'attempt' : 'attempts'}!`}
      </Text>
    </View>
  );
});

Result.displayName = 'Result';
