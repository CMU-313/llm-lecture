import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('TicTacToe Game', () => {
  it('renders the game board', () => {
    const { getAllByTestId } = render(<App />);
    const cells = getAllByTestId('cell');
    expect(cells.length).toBe(9);
  });

  it('allows players to take turns', () => {
    const { getByTestId, getAllByTestId } = render(<App />);
    const cell1 = getByTestId('cell-0');
    const cell2 = getByTestId('cell-1');
    fireEvent.click(cell1);
    expect(cell1.textContent).toBe('X');
    fireEvent.click(cell2);
    expect(cell2.textContent).toBe('O');
  });

  it('prevents players from overwriting occupied cells', () => {
    const { getByTestId } = render(<App />);
    const cell1 = getByTestId('cell-0');
    fireEvent.click(cell1);
    expect(cell1.textContent).toBe('X');
    fireEvent.click(cell1);
    expect(cell1.textContent).toBe('X');
  });

  it('detects a win condition', () => {
    const { getByTestId, getByText } = render(<App />);
    const cell1 = getByTestId('cell-0');
    const cell4 = getByTestId('cell-3');
    const cell7 = getByTestId('cell-6');
    const cell5 = getByTestId('cell-4');
    const cell8 = getByTestId('cell-7');
    fireEvent.click(cell1); // X
    fireEvent.click(cell4); // O
    fireEvent.click(cell7); // X
    fireEvent.click(cell5); // O
    fireEvent.click(cell8); // X
    expect(getByText('Player X wins!')).toBeInTheDocument();
  });

  it('detects a draw condition', () => {
    const { getByTestId, getByText } = render(<App />);
    const cells = getAllByTestId('cell');
    fireEvent.click(cells[0]); // X
    fireEvent.click(cells[1]); // O
    fireEvent.click(cells[2]); // X
    fireEvent.click(cells[4]); // O
    fireEvent.click(cells[3]); // X
    fireEvent.click(cells[5]); // O
    fireEvent.click(cells[6]); // X
    fireEvent.click(cells[8]); // O
    fireEvent.click(cells[7]); // X
    expect(getByText('Draw!')).toBeInTheDocument();
  });

  it('resets the game', () => {
    const { getByText, getByTestId } = render(<App />);
    const cell1 = getByTestId('cell-0');
    const resetButton = getByText('Reset Game');
    fireEvent.click(cell1); // X
    fireEvent.click(resetButton);
    expect(cell1.textContent).toBe('');
  });
});
