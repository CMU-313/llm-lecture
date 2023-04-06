import React, { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] === null && winner === null) {
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
      setTurn(turn === 'X' ? 'O' : 'X');
      checkForWinner(newBoard);
    }
  };

  const checkForWinner = (board) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(turn);
        return;
      }
    }

    if (board.filter((cell) => cell === null).length === 0) {
      setWinner('draw');
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setTurn('X');
    setWinner(null);
  };

  const renderCell = (index) => {
    return (
      <div
        className="cell"
        onClick={() => handleClick(index)}
        style={{ color: board[index] === 'X' ? '#FBBF24' : '#EF4444' }}
      >
        {board[index]}
      </div>
    );
  };

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe</h1>
      <div className="board">
        {renderCell(0)}
        {renderCell(1)}
        {renderCell(2)}
        {renderCell(3)}
        {renderCell(4)}
        {renderCell(5)}
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
      </div>
      <div className="status">
        {winner ? (
          winner === 'draw' ? (
            <p>It's a draw!</p>
          ) : (
            <p>Congratulations {winner}!</p>
          )
        ) : (
          <p>Next player: {turn}</p>
        )}
      </div>
      <button className="reset" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
}

export default App;
