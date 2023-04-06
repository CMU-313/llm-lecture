import React, { Component } from 'react';
import Cell from './Cell';





class Board extends Component {
  state = {
    board: Array(9).fill(null),
    currentPlayer: 'X',
  };

  handleCellClick = (index) => {
    const board = this.state.board.slice();
    board[index] = this.state.currentPlayer;
    this.setState({
      board,
      currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X',
    });

    //Check for a winner
    if ((board[0] === board[1] && board[1] === board[2] && (board[0] == 'X' || board[0] == 'O')) || 
        (board[3] === board[4] && board[4] === board[5] && (board[3] == 'X' || board[3] == 'O')) || 
        (board[6] === board[7] && board[7] === board[8] && (board[6] == 'X' || board[6] == 'O')) || 
        (board[0] === board[3] && board[3] === board[6] && (board[0] == 'X' || board[0] == 'O')) || 
        (board[1] === board[4] && board[4] === board[7] && (board[1] == 'X' || board[1] == 'O')) || 
        (board[2] === board[5] && board[5] === board[8] && (board[2] == 'X' || board[2] == 'O')) || 
        (board[0] === board[4] && board[4] === board[8] && (board[0] == 'X' || board[0] == 'O')) || 
        (board[2] === board[4] && board[4] === board[6] && (board[2] == 'X' || board[2] == 'O'))) {
      alert(`Player ${this.state.currentPlayer} has won!`);
    }

  }

  render() {
    const cells = this.state.board.map((cell, index) => {
      return (
        <Cell
          value={cell}
          onClick={() => this.handleCellClick(index)}
        />
      );
    });

    return (
      <div className="Board">
        {cells}
      </div>
    );
  }
}

export default Board;