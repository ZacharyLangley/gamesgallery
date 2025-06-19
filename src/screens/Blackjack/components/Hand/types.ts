import { CardData } from '../../types';

export interface HandProps {
  cards: CardData[];
  title: string;
  total?: number;
  showTotal?: boolean;
}
