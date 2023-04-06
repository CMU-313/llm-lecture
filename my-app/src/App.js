import React, { Component } from 'react';
import Board from './Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tic-Tac-Toe React App</h1>
        <Board />
      </div>
    );
  }
}

export default App;