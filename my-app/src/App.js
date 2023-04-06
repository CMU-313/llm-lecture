import logo from './logo.svg';
import './App.css';
import React from "react";
import GameBoard from "./Gameboard";

const App = () => {
  return (
    <div>
      <h1>3x3 Game Board</h1>
      <GameBoard />
    </div>
  );
};

export default App;
