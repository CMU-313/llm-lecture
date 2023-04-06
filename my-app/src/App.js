import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [grid, setGrid] = useState(Array(9).fill(null)); // initialize a 3x3 grid with null values
  const [xIsNext, setXIsNext] = useState(true); // track the current player

  const handleClick = (index) => {
    const newGrid = [...grid];
    if (calculateWinner(grid) || newGrid[index]) {
      // return early if the game is over or the cell is already filled
      return;
    }
    newGrid[index] = xIsNext ? "X" : "O"; // replace the value at the clicked cell with "X" or "O"
    setGrid(newGrid);
    setXIsNext(!xIsNext); // toggle the current player
  };

  const winner = calculateWinner(grid);
  const status = winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="grid-container">
      <div className="status">{status}</div>
      {grid.map((cell, index) => (
        <div key={index} className="grid-cell" onClick={() => handleClick(index)}>
          {cell}
        </div>
      ))}
    </div>
  );
}

// calculate the winner of the game based on the current grid
function calculateWinner(grid) {
  const lines = [
    [0, 1, 2],
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
    if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
      return grid[a];
    }
  }
  return null;
}
