import React, { useState } from 'react';
import Board from './Board';

/**
 * The Game component manages the state of the Tic Tac Toe game and renders the Board and game status.
 */
function Game() {
  const [board, setBoard] = useState(Array(9).fill(null)); // State for the game board
  const [xIsNext, setXIsNext] = useState(true); // State for current player
  const [winner, setWinner] = useState(null); // State for the winner of the game

  /**
   * Handles the click event for a square on the game board. Updates the board and checks for a winner.
   * @param {number} index - The index of the clicked square
   */
  function handleClick(index) {
    const squares = [...board];

    // If the clicked cell is not empty or there's already a winner, do nothing
    if (squares[index] || winner) {
      return;
    }

    // Mark the clicked cell with the current player's symbol (X or O)
    squares[index] = xIsNext ? 'X' : 'O';
    setBoard(squares);

    // Check for a winner
    const newWinner = calculateWinner(squares);
    setWinner(newWinner);

    // Switch to the other player's turn
    setXIsNext(!xIsNext);
  }

  /**
   * Determines the winner of the game, if there is one.
   * @param {Array} squares - The current state of the game board
   * @returns {string|null} - The symbol of the winner, or null if there is no winner yet
   */
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  /**
   * Renders the current game status, either displaying the winner or the next player to move.
   * @returns {string} - The current game status message
   */
  function renderStatus() {
    if (winner) {
      return `Winner: ${winner}`;
    }
    return `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  /**
   * Renders the reset button, which resets the game board, player turn, and winner state.
   * @returns {JSX.Element} - The reset button element
   */
  function renderResetButton() {
    return (
      <button onClick={() => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
        setWinner(null);
      }}>
        Reset Game
      </button>
    );
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={board} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{renderStatus()}</div>
        {renderResetButton()}
      </div>
    </div>
  );
}

export default Game;
