import React from 'react';
import Board from './Board';
import calculateWinner from './calculateWinner';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
      stepNumber: 0,
      singlePlayerMode: false,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState(
      {
        history: history.concat([
          {
            squares: squares,
            latestMove: i,
          },
        ]),
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length,
      },
      () => {
        if (this.state.singlePlayerMode && !this.state.xIsNext) {
          const cpuMove = this.cpuMakeMove(squares);
          this.handleClick(cpuMove);
        }
      }
    );
  }

  cpuMakeMove(squares) {
    // Look for the next available square
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        return i;
      }
    }

    return null;
  }

  handleModeChange() {
    this.setState({
      singlePlayerMode: !this.state.singlePlayerMode,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const latestMove = step.latestMove;
      const col = 1 + (latestMove % 3);
      const row = 1 + Math.floor(latestMove / 3);
      const desc = move
        ? `Go to move #${move} (${col}, ${row})`
        : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else if (history.length === 10) {
      status = 'Draw!';
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
          <button onClick={() => this.handleModeChange()}>
            Switch to {this.state.singlePlayerMode ? 'two' : 'single'} player mode
          </button>
        </div>
      </div>
    );
  }
}


export default Game;