import React, { useState } from 'react';
import './index.css';

function GameBoard({ board, handleCellClick }) {
  return (
    <div className="game-board">
      {board.map((cell, index) => (
        <div
          key={index}
          className="game-cell"
          onClick={() => handleCellClick(index)}
        >
          {cell}
        </div>
      ))}
    </div>
  );
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleCellClick(index) {
    const newBoard = [...board];
    if (calculateWinner(board) || newBoard[index]) return;
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function calculateWinner(board) {
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
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : board.includes(null)
    ? `Next player: ${xIsNext ? 'X' : 'O'}`
    : 'Draw';

  function resetGame() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <div className="game-status">{status}</div>
      <GameBoard board={board} handleCellClick={handleCellClick} />
      {winner && (
        <div className="game-over-message">
          <p>{`${winner} won the game!`}</p>
          <button onClick={resetGame}>Reset Game</button>
        </div>
      )}
      {!winner && !board.includes(null) && (
        <div className="game-over-message">
          <p>It's a draw!</p>
          <button onClick={resetGame}>Reset Game</button>
        </div>
      )}
    </div>
  );
}

export default App;
