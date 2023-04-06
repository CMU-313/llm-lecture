import React, { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const checkWinner = (board) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    if (!board.includes(null)) {
      return "Draw";
    }
    return null;
  };

  const handleClick = (index) => {
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      const nextPlayer = player === "X" ? "O" : "X";
      setPlayer(nextPlayer);
      const result = checkWinner(newBoard);
      setWinner(result);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${player}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
}

export default App;
