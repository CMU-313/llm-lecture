import React, { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');

  const handleClick = index => {
    const newBoard = [...board];
    if (newBoard[index] || checkWinner(board)) return;
    newBoard[index] = player;
    setBoard(newBoard);
    setPlayer(player === 'X' ? 'O' : 'X');
  }

  const checkWinner = board => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  const winner = checkWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${player}`;

  return (
    <div className="app">
      <div className="board">
        <div className="status">{status}</div>
        <div className="row">
          <Square value={board[0]} onClick={() => handleClick(0)} />
          <Square value={board[1]} onClick={() => handleClick(1)} />
          <Square value={board[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="row">
          <Square value={board[3]} onClick={() => handleClick(3)} />
          <Square value={board[4]} onClick={() => handleClick(4)} />
          <Square value={board[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="row">
          <Square value={board[6]} onClick={() => handleClick(6)} />
          <Square value={board[7]} onClick={() => handleClick(7)} />
          <Square value={board[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default App;
