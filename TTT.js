"use strict";
var gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " ",];
var winningMethods = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
function didWin(player) {
    let won = "none";
    for (let subArr of winningMethods) {
        let count = 0;
        for (let i of subArr) {
            if (gameBoard[i] == player) {
                count++;
            }
        }
        if (count == 3) {
            won = player;
        }
    }
    return won;
}
function canWin(player) {
    for (let subArr of winningMethods) {
        let count = 0;
        let used = 0;
        for (let i of subArr) {
            if (gameBoard[i] == player) {
                count++;
                used++;
            }
            else if (gameBoard[i] != " ") {
                used++;
            }
        }
        if (count == 2 && used < 3) {
            return subArr;
        }
    }
    return null;
}
function getOpenSpaces() {
    let openSpaces = [];
    let space = 0;
    while (space < gameBoard.length) {
        if (gameBoard[space] == " ") {
            openSpaces.push(space);
        }
        space++;
    }
    return openSpaces;
}
function getOpenSpace(spaces) {
    let space = 0;
    while (space < spaces.length) {
        if (gameBoard[spaces[space]] == " ") {
            return spaces[space];
        }
        space++;
    }
}
function printBoard() {
    console.clear();
    printLine(gameBoard.slice(0, 3));
    printDivider();
    printLine(gameBoard.slice(3, 6));
    printDivider();
    printLine(gameBoard.slice(6, 9));
}
function printLine(line) {
    console.log(" " + line[0] + " | " + line[1] + " | " + line[2]);
}
function printDivider() {
    console.log("-----------");
}
function computerGo() {
    if (canWin("O") != null) {
        gameBoard[getOpenSpace(canWin("O"))] = "O";
    }
    else if (canWin("X") != null) {
        gameBoard[getOpenSpace(canWin("X"))] = "O";
    }
    else {
        let spaces = getOpenSpaces();
        let length = spaces.length;
        gameBoard[spaces[Math.floor(Math.random() * length)]] = "O";
    }
}
function makeMove(move) {
    gameBoard[move - 1] = "X";
}
let getInput = function () {
    return new Promise((resolve) => {
        let readline = require('readline');
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('what number: ', (answer) => {
            resolve({ answer: answer });
            rl.close();
        });
    });
};
function play() {
    printBoard();
    getInput()
        .then((res) => {
        if (parseInt(res.answer) < 10 && parseInt(res.answer) > 0) {
            if (gameBoard[parseInt(res.answer) - 1] == " ") {
                makeMove(parseInt(res.answer));
                if (didWin("X") == "X") {
                    printBoard();
                    console.log("Player Wins!");
                }
                else {
                    computerGo();
                    if (didWin("O") == "O") {
                        printBoard();
                        console.log("Computer Wins!");
                    }
                    else {
                        printBoard();
                        play();
                    }
                }
            }
            else {
                console.log("That space is taken");
                play();
            }
        }
    });
}
play();
//# sourceMappingURL=TTT.js.map