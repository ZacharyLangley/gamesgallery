import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { List } from './components';
import { styles } from './styles';
import { HandProps } from './types';
import { Total } from './components/Total/Total';

export const Hand: React.FC<HandProps> = memo(({ cards, title, total, showTotal = true }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.cardsContainer}>
        <List cards={cards} />
      </View>
      <Total total={total} showTotal={showTotal} />
    </View>
  );
});
