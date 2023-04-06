import React from "react";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}



function Square({ value, onClick }) {
    let imageSrc = null;
    if (value === "X") {
      imageSrc = "https://www.cs.cmu.edu/~mhilton/assets/img/hilton_pic.jpg";
    } else if (value === "O") {
      imageSrc = "https://conf.researchr.org/getProfileImage/hyrumwright1/d28ae348-3c62-47d8-8eda-4de8f3e03d7b/small.jpg?1638785011000";
    }
  
    return (
      <button className="square" onClick={onClick}>
        {imageSrc ? <img src={imageSrc} alt={value} /> : value}
      </button>
    );
  }

export default function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  function handleClick(index) {
    if (calculateWinner(squares) || squares[index]) return;
    const newSquares = [...squares];
    newSquares[index] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  function renderSquare(index) {
    return (
      <Square
        value={squares[index]}
        onClick={() => handleClick(index)}
      />
    );
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="board">
      <div className="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="status">{status}</div>
    </div>
  );
}



