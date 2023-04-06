import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TicTacToe from './TicTacToe';

test('renders the game board', () => {
  const { getByTestId } = render(<TicTacToe />);
  expect(getByTestId('board')).toBeInTheDocument();
});

test('places X in square when clicked by Player 1', () => {
  const { getByTestId } = render(<TicTacToe />);
  const square = getByTestId('square-0');
  fireEvent.click(square);
  expect(square).toHaveTextContent('X');
});

test('places O in square when clicked by Player 2', () => {
  const { getByTestId } = render(<TicTacToe />);
  const square1 = getByTestId('square-0');
  const square2 = getByTestId('square-1');
  fireEvent.click(square1);
  fireEvent.click(square2);
  expect(square2).toHaveTextContent('O');
});

test('does not allow player to click same square twice', () => {
  const { getByTestId } = render(<TicTacToe />);
  const square = getByTestId('square-0');
  fireEvent.click(square);
  expect(square).toHaveTextContent('X');
  fireEvent.click(square);
  expect(square).toHaveTextContent('X');
});

test('displays winner message when player wins', () => {
  const { getByTestId, getByText } = render(<TicTacToe />);
  const square1 = getByTestId('square-0');
  const square2 = getByTestId('square-1');
  const square3 = getByTestId('square-3');
  const square4 = getByTestId('square-4');
  const square5 = getByTestId('square-6');
  fireEvent.click(square1);
  fireEvent.click(square2);
  fireEvent.click(square3);
  fireEvent.click(square4);
  fireEvent.click(square5);
  expect(getByText('Player 1 wins!')).toBeInTheDocument();
});

test('displays tie message when game ends in tie', () => {
  const { getByTestId, getByText } = render(<TicTacToe />);
  const squares = [
    getByTestId('square-0'),
    getByTestId('square-1'),
    getByTestId('square-2'),
    getByTestId('square-3'),
    getByTestId('square-4'),
    getByTestId('square-5'),
    getByTestId('square-6'),
    getByTestId('square-7'),
    getByTestId('square-8')
  ];
  fireEvent.click(squares[0]);
  fireEvent.click(squares[1]);
  fireEvent.click(squares[2]);
  fireEvent.click(squares[4]);
  fireEvent.click(squares[3]);
  fireEvent.click(squares[5]);
  fireEvent.click(squares[6]);
  fireEvent.click(squares[8]);
  fireEvent.click(squares[7]);
  expect(getByText('It\'s a tie!')).toBeInTheDocument();
});
