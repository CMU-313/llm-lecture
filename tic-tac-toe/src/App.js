import React, { useState } from 'react';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(i) {
    const squares = [...board];
    if (winner || squares[i]) return;
    squares[i] = xIsNext ? 'X' : 'O';
    setBoard(squares);
    setXIsNext(!xIsNext);
  }

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => handleClick(i)}>
        {board[i]}
      </button>
    );
  }
  
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  function calculateWinner(squares) {
    const lines = [    [0, 1, 2],
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
  

  return (
    <div className="game">
      <div className="game-board"></div>
    </div>
  );
}

export default App;
