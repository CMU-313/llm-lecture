import { render, screen } from '@testing-library/react';
import App from './App';
import { calculateWinner } from './App';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('calculateWinner', () => {
  it('should return the winning player if there is a winner', () => {
    const winningBoard = ['X', 'X', 'X', 'O', null, 'O', null, null, null];
    expect(calculateWinner(winningBoard)).toBe('X');
  });

  it('should return null if there is no winner', () => {
    const drawBoard = ['X', 'O', 'X', 'O', 'X', 'X', 'O', 'X', 'O'];
    expect(calculateWinner(drawBoard)).toBeNull();
  });

  it('should return null if the game is still in progress', () => {
    const inProgressBoard = ['X', 'O', 'X', 'O', 'X', null, null, null, null];
    expect(calculateWinner(inProgressBoard)).toBeNull();
  });
});