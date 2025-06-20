# Number Guessing Game

## Description:

- Player guesses a number between 1-100.
- Game gives hints ("Too high", "Too low") and limits attempts.
- Show the result and keep score.

## Requirements:

1. Random number generation (1-100)
2. Input for user guesses
3. Display hint ("Too High" or "Too low")
4. Limit attempts to 10
5. Reset game functionality

## Functional Requirements

1. Use a Zustand Store for all statement management unless its better to use local useState
2. Use FontAwesome for each button choice for Hint Icons
3. The Reset button should float at the bottom center, just above the tab bar.
4. Hints will change based on how far away the guess is from what the computer's number
5. "Way To High" - User's Guess is 50+ above from the computer's number
6. "Too High" - User's Guess is within 50 above from the computer's number
7. "High" - User's Guess is within 25 above from the computers guess
8. "Nearby" - User's Guess is within 10 above or 10 below the computer's guess
9. "Low" - User's Guess is within 25 below from the computers guess
10. "Too Low" - User's Guess is within 50 below from the computer's number
11. "Way Too Low" - User's Guess is 50+ below from the computer's number
12. Input in the center of the screen for the User's Guess
13. Number Specific Keyboard is used for input
14. A submission button is below to submit the number
15. Submission and Blur also occurs when the user presses enter on the keyboard
16. On Focus, input glows blue
17. If the User's guess is wrong, glow red
18. If the User's guess is correct, glow green
19. If the user's guess is correct, the input fades away and is replaced with a golden icon from Font Awesome.
20. Below the Icon is the number of guesses it took to get the number correct
