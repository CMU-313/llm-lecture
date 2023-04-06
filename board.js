import React, { useState } from "react";
import "./styles.css";

// Define the game board as a 2D array of strings
const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  
  // Define the current player (X goes first)
  let currentPlayer = "X";
  
  // Handle a player's click on a cell
  function handleClick(row, col) {
    // If the cell is already occupied, do nothing
    if (board[row][col] !== "") {
      return;
    }
    
    // Update the game board with the current player's symbol
    board[row][col] = currentPlayer;
    
    // Switch players
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    
    // Update the game board UI
    renderBoard();
    
    // Check for a winner
    const winner = checkForWinner();
    if (winner) {
      alert(`Player ${winner} wins!`);
    }
  }
  
  // Render the game board UI
  function renderBoard() {
    // Get the game board container element
    const boardContainer = document.querySelector(".board");
    
    // Clear the game board
    boardContainer.innerHTML = "";
    
    // Create a div element for each cell in the game board
    board.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell");
        cellElement.textContent = cell;
        
        // Attach a click event listener that calls handleClick with the cell's row and column index
        cellElement.addEventListener("click", () => {
          handleClick(rowIndex, colIndex);
        });
        
        // Add the cell element to the game board container
        boardContainer.appendChild(cellElement);
      });
    });
    
    // Update the current player indicator
    const currentPlayerIndicator = document.querySelector(".current-player");
    currentPlayerIndicator.textContent = `Current player: ${currentPlayer}`;
  }
  
  // Check if there is a winner
  function checkForWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== "") {
        return board[i][0];
      }
    }
    
    // Check columns
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== "") {
        return board[0][i];
      }
    }
    
    // Check diagonals
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== "") {
      return board[0][0];
    }
    
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== "") {
      return board[0][2];
    }
    
    // No winner
    return null;
  }
  
  // Call renderBoard to initialize the game board UI
  renderBoard();