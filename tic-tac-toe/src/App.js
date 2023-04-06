import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      player: 'X',
      winner: null
    };

    this.handleCellClick = this.handleCellClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  handleCellClick(row, col) {
    if (this.state.board[row][col] === '' && this.state.winner === null) {
      let newBoard = [...this.state.board];
      newBoard[row][col] = this.state.player;

      let newPlayer = (this.state.player === 'X') ? 'O' : 'X';

      let winner = this.checkForWinner(newBoard);

      this.setState({
        board: newBoard,
        player: newPlayer,
        winner: winner
      });
    }
  }

  checkForWinner(board) {
    for (let i = 0; i < 3; i++) {
      // check rows
      if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
        return board[i][0];
      }

      // check columns
      if (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
        return board[0][i];
      }
    }

    // check diagonals
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      return board[0][0];
    }

    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
      return board[0][2];
    }

    return null;
  }

  resetGame() {
    this.setState({
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      player: 'X',
      winner: null
    });
  }

  render() {
    // Create an array of JSX elements to represent the game board
    let board = this.state.board.map((row, rowIndex) => {
      let cells = row.map((cell, colIndex) => {
        return (
          <div key={colIndex} className="cell" onClick={() => this.handleCellClick(rowIndex, colIndex)}>
            {cell}
          </div>
        );
      });
  
      return (
        <div key={rowIndex} className="row">
          {cells}
        </div>
      );
    });
  
    // Create a message to display based on the game state
    let message;
    if (this.state.winner !== null) {
      message = `${this.state.winner} wins!`;
    } else if (this.state.board.every(row => row.every(cell => cell !== ''))) {
      message = 'Tie game!';
    } else {
      message = `It's ${this.state.player}'s turn`;
    }
  
    // Render the game board and UI
    return (
      <div className="tic-tac-toe">
        <div className="board">
          {board}
        </div>
        <div className="message">
          {message}
        </div>
      </div>
    );
  }
  
}

export default App;
