import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App, { checkWinner } from './App';

test('renders game board', () => {
  const { getAllByRole } = render(<App />);
  const squares = getAllByRole('button');
  expect(squares).toHaveLength(9);
});

test('clicking a square updates the board and switches player', () => {
  const { getAllByRole, getByText } = render(<App />);
  const squares = getAllByRole('button');
  const xSquare = squares[0];
  const oSquare = squares[1];
  fireEvent.click(xSquare);
  expect(xSquare).toHaveTextContent('X');
  expect(getByText('Next player: O')).toBeInTheDocument();
  fireEvent.click(oSquare);
  expect(oSquare).toHaveTextContent('O');
  expect(getByText('Next player: X')).toBeInTheDocument();
});

test('detects horizontal win', () => {
  const board = [
    'X', 'X', 'X',
    null, null, null,
    null, null, null
  ];
  const winner = checkWinner(board);
  expect(winner).toBe('X');
});

test('detects vertical win', () => {
  const board = [
    'O', null, null,
    'O', null, null,
    'O', null, null
  ];
  const winner = checkWinner(board);
  expect(winner).toBe('O');
});

test('detects diagonal win', () => {
  const board = [
    null, null, 'X',
    null, 'X', null,
    'X', null, null
  ];
  const winner = checkWinner(board);
  expect(winner).toBe('X');
});

test('detects tie', () => {
  const board = [
    'X', 'O', 'X',
    'O', 'X', 'O',
    'O', 'X', 'O'
  ];
  const winner = checkWinner(board);
  expect(winner).toBeNull();
});
