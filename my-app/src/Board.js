import React from 'react';
import './Board.css';

function Board({ squares, onClick }) {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <div className="cell" key={index} onClick={() => onClick(index)}>
          {square}
        </div>
      ))}
    </div>
  );
}

export default Board;