import React, { useState } from "react";
import "./App.css";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerOneTurn, setIsPlayerOneTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const winningCombos = [    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleCellClick = (index) => {
    if (winner || board[index]) return; // don't allow overwriting occupied cells
    const newBoard = [...board];
    newBoard[index] = isPlayerOneTurn ? "X" : "O"; // alternate between X and O
    setBoard(newBoard);
    setIsPlayerOneTurn(!isPlayerOneTurn); // toggle between true and false
    checkForWinner(newBoard);
  };

  const checkForWinner = (currentBoard) => {
    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[b] === currentBoard[c]
      ) {
        setWinner(currentBoard[a]);
        highlightWinningCombo(winningCombos[i]);
        return;
      }
    }
    if (!currentBoard.includes(null)) {
      setWinner("draw");
    }
  };

  const highlightWinningCombo = (combo) => {
    const cells = document.querySelectorAll(".cell");
    combo.forEach((index) => {
      cells[index].classList.add("winner");
    });
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerOneTurn(true);
    setWinner(null);
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.classList.remove("winner");
    });
  };

  const renderCell = (index) => {
    return (
      <div className="cell" onClick={() => handleCellClick(index)}>
        {board[index]}
      </div>
    );
  };

  return (
    <div className="board">
      {winner ? (
        <div className="game-over-message">
          {winner === "draw"
            ? "It's a draw!"
            : `Congratulations, Player ${winner}!`}
          <button onClick={resetGame}>Play again</button>
        </div>
      ) : (
        <div className="turn-indicator">
          {isPlayerOneTurn ? "Player 1 (X)" : "Player 2 (O)"}'s Turn
        </div>
      )}
      <div className="row">
        {renderCell(0)}
        {renderCell(1)}
        {renderCell(2)}
      </div>
      <div className="row">
        {renderCell(3)}
        {renderCell(4)}
        {renderCell(5)}
      </div>
      <div className="row">
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
}