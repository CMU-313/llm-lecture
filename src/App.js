import React, { useState } from 'react';
import './App.css';



function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  function calculateWinner(board) {
    const lines = [
      [0, 1, 2], // horizontal
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // vertical
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // diagonal
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return board[a];
      }
    }
    if (!board.includes(null)) {
      setWinner('draw');
      return 'draw';
    }
    return null;
  }

  function handleCellClick(index) {
    if (winner) {
      return;
    }
    const newBoard = [...board];
    if (newBoard[index]) {
      return;
    }
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  }

  return (
    <div className="game">
      <h1 className="title">Tic Tac Toe</h1>
      <div className="player-turn">{winner ? `Winner: ${winner}` : `Current player: ${currentPlayer}`}</div>
      <div className="board">
        {board.map((cell, index) => (
          <div key={index} className="cell" onClick={() => handleCellClick(index)}>
            {cell}
          </div>
        ))}
      </div>
      {winner && (
        <div className={`winner-popup ${winner === 'draw' ? 'draw' : ''}`}>
          {winner === 'draw' ? "It's a draw!" : `Player ${winner} wins!`}
          <button onClick={resetGame}>Play again</button>
        </div>
      )}
    </div>
  );
}

export default App;
