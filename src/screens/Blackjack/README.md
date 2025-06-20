# Blackjack

## Description:

- Classic casino card game where players try to get closest to 21 without going over.
- Player competes against the dealer (computer).
- Aces can be worth 1 or 11, face cards are worth 10.
- Dealer must hit on 16 and below, stand on 17 and above.

## Requirements:

1. Deal two cards to player and dealer (one dealer card face down)
2. Allow player to hit (draw another card) or stand (keep current hand)
3. Calculate hand values including Ace flexibility (1 or 11)
4. Implement dealer AI (hit on 16 or below, stand on 17+)
5. Determine winner and handle ties
6. Track player's chip balance and betting
7. Allow new game/reshuffle

# Functional Requirements

1. Use a Zustand Store for all state management unless its better to use local useState
2. Display player's hand and total at the top of the screen
3. Display dealer's hand and total (hide first card until game ends)
4. Use FontAwesome icons for card suits (hearts, diamonds, clubs, spades)
5. Show card values using numbers and face card symbols (J, Q, K, A)
6. Hit button should be prominent and centered below the hands
7. Stand button should be next to the Hit button
8. Reset/New Game button should float at the bottom center, just above the tab bar
9. Betting system with chip denominations (1, 5, 25, 100)
10. Player's chip balance displayed prominently at the top
11. Bet amount displayed below the balance
12. Double Down option when player has exactly 2 cards
13. Insurance option when dealer shows Ace
14. Blackjack pays 3:2 (1.5x bet)
15. Regular win pays 1:1 (equal to bet)
16. Push (tie) returns original bet
17. Bust (over 21) loses bet
18. Dealer bust pays 1:1
19. Animate card dealing with staggered timing
20. Show game result message (Win, Lose, Push, Blackjack, Bust)
21. Disable Hit/Stand buttons after player stands or busts
22. Auto-deal new hand after showing result for 2 seconds
23. Shuffle deck when less than 20 cards remain
24. Show card count indicator (optional)
25. Add sound effects for card dealing and winning/losing
