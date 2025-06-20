# ⚛️ Zustand + Atomic React Game Prompts

This project contains prompts and guidelines for building small JavaScript games using **React**, **Zustand** for state management, and **atomic design principles**.

Each game is structured with:

- **Atoms**: Core UI elements (e.g., Button, Text, Input)
- **Molecules**: Small UI groups (e.g., TileGrid, ControlPanel)
- **Organisms**: Game structure (e.g., GameBoard, GameLayout)
- **Store**: Zustand for state and logic

---

## 🎮 1. Rock, Paper, Scissors

**Description**: The player selects rock, paper, or scissors. The computer chooses randomly. Show the result and keep score.

**Structure**:

- **Atoms**: `Button`, `ScoreText`
- **Molecules**: `ChoiceSelector` (3 buttons), `ResultDisplay`
- **Organism**: `GameLayout`
- **Zustand Store**:
  - `choice`, `opponentChoice`, `result`, `score`
  - `playRound()` action

---

## 🔢 2. Number Guessing Game

**Description**: Player guesses a number between 1-100. Game gives hints ("Too high", "Too low") and limits attempts.

**Structure**:

- **Atoms**: `InputField`, `Button`, `FeedbackText`
- **Molecules**: `GuessForm`
- **Organism**: `GameWrapper`
- **Zustand Store**:
  - `targetNumber`, `guess`, `attemptsLeft`, `feedback`
  - `submitGuess()` action

---

## ❌⭕ 3. Tic-Tac-Toe (2 Player)

**Description**: A classic game for two players. Detect win/tie and allow reset.

**Structure**:

- **Atoms**: `Cell`
- **Molecules**: `GameBoard`
- **Organism**: `GameScreen`
- **Zustand Store**:
  - `board[]`, `currentPlayer`, `winner`
  - `makeMove(index)`, `resetGame()`

---

## 🧠 4. Memory Match (2x2 Grid)

**Description**: Flip two cards to find a matching pair. If they don’t match, flip them back.

**Structure**:

- **Atoms**: `CardTile`
- **Molecules**: `GameGrid`
- **Organism**: `MemoryGameLayout`
- **Zustand Store**:
  - `cards[]`, `flipped[]`, `matched[]`
  - `flipCard(index)`, `resetGame()`

---

## 🕹️ 5. Reaction Timer Game

**Description**: When the screen changes color, click as fast as possible. Show the reaction time.

**Structure**:

- **Atoms**: `GameButton`, `TimerText`
- **Molecules**: `ReactionPanel`
- **Organism**: `GameContainer`
- **Zustand Store**:
  - `status`, `startTime`, `reactionTime`
  - `startTimer()`, `recordClick()`, `reset()`

---

## 🧰 Project Setup Prompt

"Create a React project using `vite` or `create-react-app`. Organize your components using Atomic Design (`atoms/`, `molecules/`, `organisms/`) and use Zustand for state management. Use clean modern JavaScript (or TypeScript if preferred)."

---

Feel free to fork this as a starter for practicing rapid prototyping, interview prep, or architectural design using React + Zustand!
