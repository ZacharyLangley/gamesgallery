import React, { memo } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Hand } from './components';
import { CardSuit, CardValue } from './types';
import { styles } from './styles';

export const Blackjack = memo(() => {
  // Test data
  const playerHand = [
    { suit: CardSuit.HEARTS, value: CardValue.ACE },
    { suit: CardSuit.DIAMONDS, value: CardValue.KING },
  ];

  const dealerHand = [
    { suit: CardSuit.CLUBS, value: CardValue.SEVEN },
    { suit: CardSuit.SPADES, value: CardValue.QUEEN, isHidden: true },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Hand cards={dealerHand} title="Dealer's Hand" total={7} showTotal={false} />
        <Hand cards={playerHand} title="Your Hand" total={21} />
      </View>
    </SafeAreaView>
  );
});
