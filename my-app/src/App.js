import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleClick = (row, col) => {
    // create a copy of the board
    const newBoard = [...board];
    // update the value of the clicked cell
    newBoard[row][col] = currentPlayer;
    // toggle the current player
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    // set the new board state
    setBoard(newBoard);
  };

  return (
    <div className="App">
      <h1>3x3 Game Board</h1>
      <div className="board">
        <div className="status">Current player: {currentPlayer}</div>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className="cell"
                onClick={() => handleClick(rowIndex, colIndex)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
