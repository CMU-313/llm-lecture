import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Tic Tac Toe", () => {
  test("renders the board", () => {
    const { getAllByRole } = render(<App />);
    const squares = getAllByRole("button");
    expect(squares.length).toBe(9);
  });

  test("renders the reset button", () => {
    const { getByRole } = render(<App />);
    const resetButton = getByRole("button", { name: "Reset" });
    expect(resetButton).toBeInTheDocument();
  });

  test("clicking a square updates the board", () => {
    const { getAllByRole } = render(<App />);
    const squares = getAllByRole("button");
    fireEvent.click(squares[0]);
    expect(squares[0]).toHaveTextContent("X");
  });

  test("clicking reset button clears the board", () => {
    const { getAllByRole, getByRole } = render(<App />);
    const squares = getAllByRole("button");
    fireEvent.click(squares[0]);
    const resetButton = getByRole("button", { name: "Reset" });
    fireEvent.click(resetButton);
    expect(squares[0]).toHaveTextContent("");
  });

  test("clicking a square when game is won does not update the board", () => {
    const { getAllByRole } = render(<App />);
    const squares = getAllByRole("button");
    fireEvent.click(squares[0]);
    fireEvent.click(squares[1]);
    fireEvent.click(squares[3]);
    fireEvent.click(squares[4]);
    fireEvent.click(squares[6]);
    fireEvent.click(squares[5]);
    fireEvent.click(squares[2]);
    expect(squares[2]).toHaveTextContent("");
  });

  test("shows 'Player X wins!' when X wins", () => {
    const { getAllByRole, getByText } = render(<App />);
    const squares = getAllByRole("button");
    fireEvent.click(squares[0]);
    fireEvent.click(squares[1]);
    fireEvent.click(squares[3]);
    fireEvent.click(squares[4]);
    fireEvent.click(squares[6]);
    fireEvent.click(squares[5]);
    expect(getByText("Winner: X")).toBeInTheDocument();
  });

  test("shows 'Player O wins!' when O wins", () => {
    const { getAllByRole, getByText } = render(<App />);
    const squares = getAllByRole("button");
    fireEvent.click(squares[0]);
    fireEvent.click(squares[1]);
    fireEvent.click(squares[3]);
    fireEvent.click(squares[4]);
    fireEvent.click(squares[6]);
    fireEvent.click(squares[5]);
    fireEvent.click(squares[2]);
    expect(getByText("Winner: O")).toBeInTheDocument();
  });

  test("Draw!' when there is a tie game", () => {
    const { getAllByRole, getByText } = render(<App />);
    const squares = getAllByRole("button");
    fireEvent.click(squares[0]);
    fireEvent.click(squares[1]);
    fireEvent.click(squares[2]);
    fireEvent.click(squares[3]);
    fireEvent.click(squares[4]);
    fireEvent.click(squares[5]);
    fireEvent.click(squares[7]);
    fireEvent.click(squares[6]);
    fireEvent.click(squares[8]);
    expect(getByText("Draw!")).toBeInTheDocument();
  });
});
