export type GuessInputProps = {
  onGuess: (guess: number) => void;
  gameWon: boolean;
  gameOver: boolean;
  attempts: number;
};
