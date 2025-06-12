import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const Versus = memo(() => {
  return (
    <View style={styles.vsContainer}>
      <Text style={styles.vs}>{'VS'}</Text>
    </View>
  );
});
