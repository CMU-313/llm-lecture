import React, { useState } from "react";
import "./styles.css";

function App() {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);

  const handleClick = (row, col) => {
    console.log(`Clicked on cell (${row}, ${col})`);
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <button
              key={colIndex}
              className="cell"
              onClick={() => handleClick(rowIndex, colIndex)}
            >
              {cell}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;