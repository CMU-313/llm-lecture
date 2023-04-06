Tic-Tac-Toe Game
This is a simple implementation of the classic Tic-Tac-Toe game, created using React components and CSS styling.

How to Play
To play the game, simply open the index.html file in a web browser. The game will be displayed in the browser window, with a 3x3 grid of clickable cells representing the game board.

To make a move, click on an empty cell. The game will alternate between two players, with X going first and O going second. A visual cue will indicate which player's turn it is.

The game will automatically check for win conditions after each move. If a player gets three in a row, column, or diagonal, a congratulatory message will be displayed, along with the winning combination highlighted in green.

If all cells are filled and no player has won, the game will be declared a draw and an appropriate message will be displayed.

To start a new game, simply click on the "Reset" button located below the game board. This will clear the board and reset the turn indicator.

Files and Components
The following files and components were used to create this implementation of the Tic-Tac-Toe game:

index.html: The main HTML file that contains the game board and scripts.
app.js: The main React component that renders the game board and handles game logic.
game.js: A helper function that contains the game logic for checking win conditions and determining the winner.
board.js: A child component of App that renders the individual cells of the game board.
Board.css: A CSS file that styles the game board and cells.
Development and Contributions
This implementation was created as a learning exercise and is not intended for production use. However, feel free to use and modify the code as needed for your own purposes.

If you'd like to contribute to the project, feel free to submit a pull request with your changes.