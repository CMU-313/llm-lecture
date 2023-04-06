import React, { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleCellClick = (index) => {
    if (winner || board[index]) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    checkForWinner(newBoard);
    switchPlayers();
  };

  const checkForWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        setWinner(currentPlayer);
        return;
      }
    }
  };

  const switchPlayers = () => {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const renderCell = (index) => {
    return (
      <div
        className="cell"
        onClick={() => handleCellClick(index)}
      >
        {board[index]}
      </div>
    );
  };

  const renderBoard = () => {
    return (
      <div className="board">
        {board.map((value, index) => {
          return renderCell(index);
        })}
      </div>
    );
  };

  const renderMessage = () => {
    if (winner) {
      return (
        <div className="message">
          {winner} wins!
        </div>
      );
    } else {
      return (
        <div className="message">
          {currentPlayer}'s turn
        </div>
      );
    }
  };

  const restart = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <div className="App">
      {renderBoard()}
      {renderMessage()}
      <button onClick={() => restart()} id="restart">Restart</button>
    </div>
  );
}

export default App;
