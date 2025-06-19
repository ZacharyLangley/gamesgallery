import { memo } from 'react';

import { CardData } from '../../../../types';
import { CARD_HEIGHT, CARD_WIDTH } from '../../../Card/constants';
import { Card } from '../../../Card/Card';
import { HiddenCard } from '../../../HiddenCard/HiddenCard';

export const List = memo(({ cards }: { cards: CardData[] }) => {
  return cards.map((card, index) =>
    card.isHidden ? (
      <HiddenCard key={index} width={CARD_WIDTH} height={CARD_HEIGHT} />
    ) : (
      <Card key={index} suit={card.suit} value={card.value} />
    ),
  );
});
