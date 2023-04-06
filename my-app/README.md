## `Game` Component

### Description

The `Game` component is responsible for managing the state of the Tic Tac Toe game. It keeps track of which player's turn it is, the current state of the game board, and whether the game has ended in a win or draw.

### Props

None

### State

- `board`: An array of 9 strings representing the current state of the game board. Each string is either "X", "O", or null.
- `xIsNext`: A boolean indicating whether it is currently the X player's turn.
- `winner`: A string indicating the winner of the game, if any. Possible values are "X", "O", "draw", or null.

### Methods

- `handleClick(i)`: A function that is called when a square on the game board is clicked. It updates the state of the `board` array and checks if there is a winner or if the game has ended in a draw.

## `Board` Component

### Description

The `Board` component is responsible for rendering the game board and handling player clicks. It contains 9 `Square` components and uses the `onClick` prop to handle user clicks.

### Props

- `squares`: An array of 9 strings representing the current state of the game board. Each string is either "X", "O", or null.
- `onClick(i)`: A function that is called when a square on the game board is clicked. It passes the index of the clicked square to the `handleClick` function in the `Game` component.

### Methods

None

## `Square` Component

### Description

The `Square` component represents a single square on the Tic Tac Toe game board. It renders an `X`, `O`, or nothing depending on the value of its `value` prop.

### Props

- `value`: A string representing the value of the square. Possible values are "X", "O", or null.
- `onClick()`: A function that is called when the square is clicked. It is passed up to the `Board` component to handle user clicks.

### Methods

None

## `calculateWinner(squares)` Function

### Description

The `calculateWinner` function is responsible for determining the winner of the Tic Tac Toe game. It takes an array of 9 strings representing the current state of the game board and returns the winner, if any.

### Parameters

- `squares`: An array of 9 strings representing the current state of the game board. Each string is either "X", "O", or null.

### Return Value

A string indicating the winner of the game, if any. Possible values are "X", "O", "draw", or null.

## Usage Instructions

To use the Tic Tac Toe app, simply run the following command to start the development server:


## npm start

This will open the app in your default browser. From there, you can click on the squares on the game board to place X's and O's and try to win the game. The app also includes unit tests that can be run with the following command:

## npm test

This will run all of the tests in the app and provide feedback on whether they passed or failed.