import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Tic Tac Toe game', () => {
  test('displays the correct starting player', () => {
    const { getByText } = render(<App />);
    const statusElement = getByText(/Next player: X/i);
    expect(statusElement).toBeInTheDocument();
  });

  test('displays the correct winner when a player wins', () => {
    const { getAllByTestId, getByText } = render(<App />);
    const squares = getAllByTestId('square');

    fireEvent.click(squares[0]); // X
    fireEvent.click(squares[1]); // O
    fireEvent.click(squares[3]); // X
    fireEvent.click(squares[4]); // O
    fireEvent.click(squares[6]); // X

    const statusElement = getByText(/Winner: X/i);
    expect(statusElement).toBeInTheDocument();
  });

  test('displays the correct message when the game is a draw', () => {
    const { getAllByTestId, getByText } = render(<App />);
    const squares = getAllByTestId('square');

    fireEvent.click(squares[0]); // X
    fireEvent.click(squares[1]); // O
    fireEvent.click(squares[2]); // X
    fireEvent.click(squares[3]); // O
    fireEvent.click(squares[4]); // X
    fireEvent.click(squares[6]); // O
    fireEvent.click(squares[5]); // X
    fireEvent.click(squares[8]); // O
    fireEvent.click(squares[7]); // X

    const statusElement = getByText(/draw/i);
    expect(statusElement).toBeInTheDocument();
  });
});
