import React from "react";
import "./Gameboard.css";
import {useState} from "react";

const GameBoard = () => {

    const [currentPlayer, setCurrentPlayer] = useState("X");

    const handleCellClick = (event) => {
        if (event.target.textContent === "") {
          event.target.textContent = currentPlayer;
          setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        }
    };
  
    return (
        <div>
        <p>Current player: {currentPlayer}</p>
        <div className="game-board">
          <div className="row">
            <div className="cell" onClick={handleCellClick}></div>
            <div className="cell" onClick={handleCellClick}></div>
            <div className="cell" onClick={handleCellClick}></div>
          </div>
          <div className="row">
            <div className="cell" onClick={handleCellClick}></div>
            <div className="cell" onClick={handleCellClick}></div>
            <div className="cell" onClick={handleCellClick}></div>
          </div>
          <div className="row">
            <div className="cell" onClick={handleCellClick}></div>
            <div className="cell" onClick={handleCellClick}></div>
            <div className="cell" onClick={handleCellClick}></div>
          </div>
        </div>
      </div>
  );
};


export default GameBoard;