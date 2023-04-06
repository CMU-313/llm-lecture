import React, { useState } from "react";
import Board from "./board";
import "./styles.css";

function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
  
    function handleClick(index) {
      const newBoard = [...board];
      if (calculateWinner(board) || newBoard[index]) return;
      newBoard[index] = xIsNext ? "X" : "O";
      setBoard(newBoard);
      setXIsNext(!xIsNext);
    }
  
    function calculateWinner(board) {
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
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
        }
      }
      return null;
    }
  
    const winner = calculateWinner(board);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`;
    
    // Render the X or O image based on which player is active
    const xImageElement = <img src={"https://www.cs.cmu.edu/~mhilton/assets/img/hilton_pic.jpg"} alt="X" />;
    const oImageElement = <img src={"https://www.cs.cmu.edu/~mhilton/assets/img/hilton_pic.jpg"} alt="O" />;
    const playerImage = xIsNext ? xImageElement : oImageElement;
  
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={board} onClick={handleClick} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          
        </div>
      </div>
    );
  }
  
  export default Game;