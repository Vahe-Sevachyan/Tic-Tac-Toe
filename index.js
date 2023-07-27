const gameBoard = document.querySelector(".game-board");

const info = document.querySelector(".info");

const boardValues = ["", "", "", "", "", "", "", "", ""];

let startingPlayer = "circle";

info.innerHTML = "It's Circle Turn first";

function createBoard() {
  boardValues.forEach((boardValue, index) => {
    const boardElement = document.createElement("div");
    boardElement.classList.add("square");
    boardElement.id = index;
    boardElement.addEventListener("click", startFirst);
    gameBoard.append(boardElement);
  });
}

createBoard();

function startFirst(e) {
  const startDisplay = document.createElement("div");
  startDisplay.classList.add(startingPlayer);
  e.target.append(startDisplay);
  startingPlayer = startingPlayer === "circle" ? "x" : "circle";
  info.innerHTML = `It is now ${startingPlayer}'s turn`;
  e.target.removeEventListener("click", startFirst);
  checkScore();
}

function checkScore() {
  const allSquares = document.querySelectorAll(".square");
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winningCombos.forEach((winningCombo) => {
    const circleWins = winningCombo.forEach((combo) => {
      allSquares[combo].firstChild?.classList.contains("circle");
      if (circleWins) {
        info.innerHTML = `Circle Wins!`;
        return;
      }
    });
  });
}

// function addBoardValue(e) {
//   const boardValueDisplay = document.createElement("div");
//   boardValueDisplay.classList.add(startingPlayer);
//   e.target.append(boardValueDisplay);
// }
//

// const displayBoxes = document.querySelectorAll(".box");

// const boxes = document.querySelectorAll(".box");

// const gameBoard = [
//   ["", "", ""],
//   ["", "", ""],
//   ["", "", ""],
// ];

// boxes.forEach((box) => {
//   box.onclick = (e) => {
//     if (e.target.innerHTML === "") {
//       e.target.innerHTML = "v";
//     }
//   };
// });

// for (let i = 0; i < gameBoard.length; i++) {
//   for (let j = 0; j < gameBoard[i].length; j++) {
//     const gameBoardValue = gameBoard[i][j];
//     displayBoxes.forEach((box) => {
//       box.innerHTML = gameBoardValue;
//     });
//   }
// }
// gameBoard.forEach((game) => {
//   console.table(game);
// });

// displayBoxes.forEach((box) => {
//   console.log(box.innerHTML);
// });

// for (let displayBox of displayBoxes) {
//   console.log(displayBox.innerHTML);
// }

// let chunked = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const playerOne = {
//   name: user,
//   mark: "X",
// };
