import React, { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');

  function handleCellClick(index) {
    const newBoard = [...board];
    if (newBoard[index] || calculateWinner(newBoard)) {
      // if cell is already occupied or game is won, do nothing
      return;
    }
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'); // alternate between X and O
  }


  return (<div>
    <div className="player-turn">{`Current player: ${currentPlayer}`}</div>
    <div className="board">
      {board.map((cell, index) => (
        <div key={index} className="cell" onClick={() => handleCellClick(index)}>
          {cell}
        </div>
      ))}
    </div></div>
  );
}

export default App;
