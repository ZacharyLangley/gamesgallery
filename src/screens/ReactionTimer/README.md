# Reaction Timer Game

## Description:

- hen the screen changes color, click as fast as possible.
- Show the reaction time.
- Keep Highest Scores

## Requirements:

1. Display a button that changes color after a random delay
2. Record timestamp when color changes
3. Record timestamp when user clicks
4. Calculate reaction time in milliseconds
5. Show result and allow retry/reset

# Functional Requirements

1. Use a Zustand Store for all statement management unless its better to use local useState
2. The first state is just an instruction that says, when the screen turns red, tap the screen.
3. Beneath the instruction is a play button made with font awesome that starts the first countdown from 3
4. A count down that starts at 3 in the center of the screen
5. Each number in the countdown grows big as though its coming towards the user and fades out before going to the next number does the same.
6. The Reset button should float at the bottom center, just above the tab bar.
7. A Score sits on top of the screen keeps a list of the top 5 attempts.
8. When the countdown completes, another countdown occurs but its a random time between instantly and 5 seconds.
9. When that second countdown completes, the screen will flash red.
10. In the center of the screen is the current time being counted
11. We track the amount of milliseconds to seconds it takes to tap the screen. We are going to need an optimal way to track that time, maybe references.
12. When the user taps the screen the time is captured and the screen fades to back to the original background color.
13. if the time exceeds 10 seconds, kill the counter and tell the user that we are very disappointed in them.
14. We keep track of the top 5 scores and display them at the end.
15. If the time that the user just created is within the top 5, we put it in its spot and highlight it in yellow
16. Reset Button is replaced with a try again button. We do not reset the highscores being tracked.
