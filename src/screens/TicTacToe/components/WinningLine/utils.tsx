export const drawRowLine = (start: number, cellSize: number, lineWidth: number) => ({
  width: cellSize * 3,
  height: 4,
  left: (start % 3) * cellSize,
  top: Math.floor(start / 3) * cellSize + cellSize / 2 - 2,
  transform: [{ scaleX: lineWidth }],
});

export const drawColumnLine = (start: number, cellSize: number, lineWidth: number) => ({
  width: 4,
  height: cellSize * 3,
  left: (start % 3) * cellSize + cellSize / 2 - 2,
  top: Math.floor(start / 3) * cellSize,
  transform: [{ scaleY: lineWidth }],
});

export const drawDiagnalL2RLine = (start: number, cellSize: number, lineWidth: number) => {
  const isMainDiagonal = start === 0;
  const diagonalLength = cellSize * 3 * Math.sqrt(2);
  const halfCell = cellSize / 1.6;

  return {
    width: diagonalLength,
    height: 4,
    left: isMainDiagonal ? -halfCell : cellSize * 2.5,
    top: cellSize * 1.5 - 2,
    transform: [{ rotate: '45deg' }, { scaleX: lineWidth }],
  };
};

export const drawDiagnalR2LLine = (start: number, cellSize: number, lineWidth: number) => {
  const isMainDiagonal = start === 2;
  const diagonalLength = cellSize * 3 * Math.sqrt(2);
  const halfCell = cellSize / 1.6;

  return {
    width: diagonalLength,
    height: 4,
    left: isMainDiagonal ? -halfCell : cellSize * 2.5,
    top: cellSize * 1.5 - 2,
    transform: [{ rotate: '-45deg' }, { scaleX: lineWidth }],
  };
};
