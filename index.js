const displayBoxes = document.querySelectorAll(".box");

const boxes = document.querySelectorAll(".box");

const gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

boxes.forEach((box) => {
  box.onclick = (e) => {
    if (e.target.innerHTML === "") {
      e.target.innerHTML = "v";
    }
  };
});

for (let i = 0; i < gameBoard.length; i++) {
  for (let j = 0; j < gameBoard[i].length; j++) {
    const gameBoardValue = gameBoard[i][j];
    displayBoxes.forEach((box) => {
      box.innerHTML = gameBoardValue;
    });
  }
}
gameBoard.forEach((game) => {
  console.table(game);
});
// function boardDisplay(displayBoxes) {

// }

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
