export interface BettingControlsProps {
  playerBalance: number;
  pendingBet: number;
  onAddToBet: (amount: number) => void;
  onSubmitBet: () => void;
  onClearBet: () => void;
  onAllIn: () => void;
}
