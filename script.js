// script.js
const cells = document.querySelectorAll('.cells');
const statusText = document.getElementById('status');
let currentPlayer = 'X';
let board = Array(9).fill(null);

const winningCombinations = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]];

function handleClick(event) {
  const index = event.target.dataset.index;

  if (!board[index] && !checkWinner()) {
    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    if (checkWinner()) {
      statusText.textContent = `!!! ${currentPlayer} won the Game !!!`;
    } else if (board.every(cells => cells)) {
      statusText.textContent = "!!! It's a draw !!!";
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      statusText.textContent = `--> Player ${currentPlayer}'s turn <--`;
    }
  }
}

function checkWinner() {
  return winningCombinations.some(combination => {
    return combination.every(index => board[index] === currentPlayer);
  });
}

// Add event listeners to cells
cells.forEach(cells => cells.addEventListener('click', handleClick));

// Initial status
statusText.textContent = `--> Player ${currentPlayer}'s turn <--`;
