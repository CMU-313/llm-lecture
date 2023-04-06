import React, { useState } from 'react';
import './App.css';

// Define the initial state of the game board as a 2D array of empty strings
const initialBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

function App() {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  // Handle a player's click on a cell
  function handleClick(row, col) {
    // If the cell is already occupied, do nothing
    if (board[row][col] !== "") {
      return;
    }

    // Update the game board with the current player's symbol
    const newBoard = [...board];
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    // Switch players
    const newPlayer = currentPlayer === "X" ? "O" : "X";
    setCurrentPlayer(newPlayer);
  }

  // Check if there is a winner
  function checkForWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== "") {
        return board[i][0];
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== "") {
        return board[0][i];
      }
    }

    // Check diagonals
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== "") {
      return board[0][0];
    }

    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== "") {
      return board[0][2];
    }

    // No winner
    return null;
  }

  // Render the game board UI
  function renderBoard() {
    return (
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className="cell"
                onClick={() => handleClick(rowIndex, colIndex)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  // Check for a winner and display the result
  const winner = checkForWinner();
  let status;
  if (winner) {
    status = `Player ${winner} wins!`;
  } else if (board.flat().every(cell => cell !== "")) {
    status = "It's a tie!";
  } else {
    status = `Current player: ${currentPlayer}`;
  }

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      {renderBoard()}
      <p>{status}</p>
    </div>
  );
}

export default App;