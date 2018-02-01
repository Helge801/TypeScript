"use strict";
var gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " ",];
var winningMethods = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
function didWin(player) {
    var won = "none";
    for (var _i = 0, winningMethods_1 = winningMethods; _i < winningMethods_1.length; _i++) {
        var subArr = winningMethods_1[_i];
        var count = 0;
        for (var _a = 0, subArr_1 = subArr; _a < subArr_1.length; _a++) {
            var i = subArr_1[_a];
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
    for (var _i = 0, winningMethods_2 = winningMethods; _i < winningMethods_2.length; _i++) {
        var subArr = winningMethods_2[_i];
        var count = 0;
        var used = 0;
        for (var _a = 0, subArr_2 = subArr; _a < subArr_2.length; _a++) {
            var i = subArr_2[_a];
            if (gameBoard[i] == player) {
                count++;
                used++;
            }
            else if (gameBoard[i] != " ") {
                used++;
            }
        }
        if (count == 2) {
            return subArr;
        }
    }
    return null;
}
function getOpenSpaces() {
    var openSpaces = [];
    var space = 0;
    while (space < gameBoard.length) {
        if (gameBoard[space] == " ") {
            openSpaces.push(space);
        }
        space++;
    }
    return openSpaces;
}
function getOpenSpace(spaces) {
    var space = 0;
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
        var spaces = getOpenSpaces();
        var length_1 = spaces.length;
        gameBoard[spaces[Math.floor(Math.random() * length_1)]] = "O";
    }
}
function makeMove(move) {
    gameBoard[move - 1] = "X";
}
var getInput = function () {
    return new Promise(function (resolve) {
        var readline = require('readline');
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('what number: ', function (answer) {
            resolve({ answer: answer });
            rl.close();
        });
    });
};
function play() {
    printBoard();
    getInput()
        .then(function (res) {
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