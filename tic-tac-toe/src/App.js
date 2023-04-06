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
    const { board, player, winner } = this.state;
  
    return (
      <div className="app">
        <div className="board">
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, cellIndex) => (
                <div key={cellIndex} className="cell" onClick={() => this.handleCellClick(rowIndex, cellIndex)}>
                  {cell === 'X' && <span className="x">X</span>}
                  {cell === 'O' && <span className="o">O</span>}
                </div>
              ))}
            </div>
          ))}
        </div>
        {winner && <div className="message">{`${winner} wins!`}</div>}
        {!winner && !board.flat().includes(null) && <div className="message">It's a tie!</div>}
        {!winner && board.flat().includes(null) && <div className="message">{`Player ${player}'s turn`}</div>}
        <div className="buttons">
          <button className="reset" onClick={this.handleReset}>Reset</button>
          {winner || !board.flat().includes(null) ? <button className="play-again" onClick={this.handleReset}>Play Again</button> : null}
        </div>
      </div>
    );
  }
  
  
}

export default App;
