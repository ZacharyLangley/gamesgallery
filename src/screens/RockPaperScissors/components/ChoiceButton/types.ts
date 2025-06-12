import { Choice } from '../../types';

export type ChoiceButtonProps = {
  choice: Choice;
  isSelected: boolean;
  onPress: (choice: Choice) => void;
  disabled?: boolean;
};
