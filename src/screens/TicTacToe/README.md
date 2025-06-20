# Tic-Tac-Toe

## Description:

- A classic game for two players.
- Detect win/tie/lose.
- Allow reset.

## Requirements:

1. Render a 3x3 grid of clickable cells
2. Alternate turns between players (X and O)
3. Check for win or draw after each move
4. Display winner or draw
5. Include game reset button

# Functional Requirements

1. Use a Zustand Store for all state management unless its better to use local useState
2. The game board should be centered on screen with equal sized cells
3. X and O should be displayed using FontAwesome icons
4. Active player's turn should be highlighted at the top of the screen
5. Winning combination should be highlighted in green
6. Reset button should float at the bottom center, just above the tab bar
7. Score tracking for both players at the top of the screen
8. Disable cell clicks after game ends (win/draw)
9. Add subtle animations for placing X/O and winning combinations
10. Show game status message (Player X's turn, Player O wins, Draw)
