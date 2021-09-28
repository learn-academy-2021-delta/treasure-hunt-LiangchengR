# React Treasure Hunt Game

### Remember:
- Pseudocode!!
- Ask clarifying questions

### User Stories
- As a user, I can see a page with a 3 by 3 grid board game with a question mark in each square.
    - Branch: board-game
    - added a div to square with css
    -imported square to app
    -mapped over the array in state and returned the square component call
    -wrapped a div around mapped components logic
    -styled the gameboard using flexbox
    -added styles to values in squares


- As a user, when I click on one of the question marks an alert appears with the index position of that question mark in the array.
    - Branch: alert-index
    - created an onClick in the square div
    - created a handler method for the square div
    - passed index as props to square
    - create a handleGameplay method to act as a functional prop
    - passed the handleGameplay to square

- As a user, when I click on one of the question marks instead of the alert the question mark turns into a tree emoji.
    -Branch: tree-emoji
    -destructured board out of state
    -updated specific value to tree emjoji
    -ctrl + cmd + space for emojis
    -setState of board after updating the array

- As a user, if I select the winning square the question mark will become a treasure emoji.
- As a user, if I select the losing square the question mark will become a bomb emoji.
    -Branch: treasure-bomb
    -added treasure and bomb locs to state
    -added a componentDidMount to create random numbers
    -set the state values of treasure and bomb to random numbers
    -created conitionals to check current index to trasure and bomb loc on click
    -else return tree

- As a user, I can see a counter that shows how many guesses I have left. The counter starts at 5 and decrements one every time I click on a square that is not the treasure nor the bomb.
- As a user, I can see a message informing me that I won the game if I select the square that contains the treasure.
- As a user, I can see a message informing me that I lost the game if I select the square that contains the bomb.
- As a user, I cannot continue to play the game after I win or lose.
- As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).
- As a user, I can click on a “Play Again” button that will restart the game.
