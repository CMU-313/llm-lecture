import React from 'react';

class TicTacToe extends React.Component {
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
  }

  handleCellClick(row, col) {
    // If the cell is already filled or there is a winner, ignore the click
    if (this.state.board[row][col] !== '' || this.state.winner !== null) {
      return;
    }

    // Update the game board with the player's move
    let newBoard = this.state.board;
    newBoard[row][col] = this.state.player;
    this.setState({
      board: newBoard
    });

    // Check for a winner
    let winner = this.checkWinner();
    if (winner !== null) {
      this.setState({
        winner: winner
      });
      return;
    }

    // Switch the player's turn
    let newPlayer = (this.state.player === 'X') ? 'O' : 'X';
    this.setState({
      player: newPlayer
    });
  }

  checkWinner() {
    // Check for horizontal lines
    for (let i = 0; i < 3; i++) {
      if (this.state.board[i][0] === this.state.board[i][1] && this.state.board[i][0] === this.state.board[i][2]) {
        return this.state.board[i][0];
      }
    }

    // Check for vertical lines
    for (let j = 0; j < 3; j++) {
      if (this.state.board[0][j] === this.state.board[1][j] && this.state.board[0][j] === this.state.board[2][j]) {
        return this.state.board[0][j];
      }
    }

    // Check for diagonal lines
    if (this.state.board[0][0] === this.state.board[1][1] && this.state.board[0][0] === this.state.board[2][2]) {
      return this.state.board[0][0];
    }

    if (this.state.board[0][2] === this.state.board[1][1] && this.state.board[0][2] === this.state.board[2][0]) {
      return this.state.board[0][2];
    }

    // If there are no more moves left and no winner, declare a tie
    let movesLeft = false;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.state.board[i][j] === '') {
          movesLeft = true;
          break;
        }
      }
    }
    if (!movesLeft) {
      return 'T';
    }

    // If there is no winner yet, return null
    return null;
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

export default TicTacToe;
