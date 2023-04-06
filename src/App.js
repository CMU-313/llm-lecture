import React, { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');

  function handleCellClick(index) {
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'); // alternate between X and O
  }

  return (
    <div className="board">
      <div className="player-turn">{`Current player: ${currentPlayer}`}</div>
      {board.map((cell, index) => (
        <div key={index} className="cell" onClick={() => handleCellClick(index)}>
          {cell}
        </div>
      ))}
    </div>
  );
}

export default App;
