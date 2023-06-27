let buttonclick = document.querySelectorAll("button");
let currentPlayer = "X";
let counter = 0;

buttonclick.forEach((button) => {
    button.addEventListener("click", myFunction);
});

function myFunction(e) {
    if (e.target.innerText === "") {
    let newText = currentPlayer;
    e.target.innerText = newText;
    counter++;

    if (counter === 9) {
        alert("Game over! It's a draw.");
        resetGame();
    } else if (checkWin()) {
        alert("Player " + currentPlayer + " wins!");
        resetGame();
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
    }
}

function checkWin() {
const winningCombinations = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6]
];

for (let combination of winningCombinations) {
    let [a, b, c] = combination;
    if (
    buttonclick[a].innerText === buttonclick[b].innerText &&
    buttonclick[b].innerText === buttonclick[c].innerText &&
    buttonclick[a].innerText !== ""
    ) {
    return true;
    }
}

return false;
}

function resetGame() {
buttonclick.forEach((button) => {
    button.innerText = "";
});
currentPlayer = "X";
counter = 0;
}