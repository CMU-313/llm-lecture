import React from 'react';
import './Board.css';

/**
 * The Board component renders a 3x3 grid of clickable cells, using the provided
 * `squares` prop to display X's and O's. When a cell is clicked, the `onClick` prop
 * function is called with the index of the clicked cell.
 *
 * @param {object} props - The props object that contains the squares array and onClick function.
 * @param {string[]} props.squares - An array of 9 strings representing the contents of the game board.
 * @param {function} props.onClick - A function that is called when a cell is clicked, with the index of the clicked cell.
 * @returns {JSX.Element} The Board component JSX markup.
 */
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
