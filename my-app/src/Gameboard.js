import React, { useState } from "react";
import "./Gameboard.css";


const GameBoard = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameBoard, setGameBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const handleCellClick = (rowIndex, columnIndex) => {
    if (gameBoard[rowIndex][columnIndex] === "") {
      const newGameBoard = [...gameBoard];
      newGameBoard[rowIndex][columnIndex] = currentPlayer;
      setGameBoard(newGameBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const renderCell = (rowIndex, columnIndex) => {
    return (
      <div
        className="cell"
        onClick={() => handleCellClick(rowIndex, columnIndex)}
      >
        {gameBoard[rowIndex][columnIndex]}
      </div>
    );
  };

  return (
    <div>
      <p>Current player: {currentPlayer}</p>
      <div className="game-board">
        <div className="row">
          {renderCell(0, 0)}
          {renderCell(0, 1)}
          {renderCell(0, 2)}
        </div>
        <div className="row">
          {renderCell(1, 0)}
          {renderCell(1, 1)}
          {renderCell(1, 2)}
        </div>
        <div className="row">
          {renderCell(2, 0)}
          {renderCell(2, 1)}
          {renderCell(2, 2)}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
