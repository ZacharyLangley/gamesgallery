export interface GameControlsProps {
  canDoubleDown: boolean;
  canInsurance: boolean;
  onHit: () => void;
  onStand: () => void;
  onDoubleDown: () => void;
  onTakeInsurance: () => void;
}
