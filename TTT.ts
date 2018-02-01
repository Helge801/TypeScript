"use strict";

var gameBoard : string[] = [" "," "," "," "," "," "," "," "," ",];

var winningMethods : number[][] = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function didWin(player : string) : string {
  let won : string = "none";
  for (let subArr of winningMethods) {
    let count : number = 0;
    for (let i of subArr) {
      if (gameBoard[i] == player) {
        count++;
      }
    }
    if (count == 3){
      won = player;
    }
  }
  return won;
}

function canWin(player : string) : number[] {
  for (let subArr of winningMethods) {
    let count : number = 0;
    let used : number = 0
    for (let i of subArr) {
      if (gameBoard[i] == player) {
        count++;
        used++;
      }
      else if (gameBoard[i] != " ") {
        used++;
      }
    }
    if (count == 2 && used < 3){
      return subArr;
    }
  }
  return null;
}

function getOpenSpaces() : number[] {
  let openSpaces : number[] = [];
  let space : number = 0;
  while (space < gameBoard.length ) {
    if (gameBoard[space] == " ") {
      openSpaces.push(space);
    }
    space++;
  }
  return openSpaces;
}

function getOpenSpace(spaces : number[]) : number {
  let space : number = 0
  while (space < spaces.length) {
    if (gameBoard[spaces[space]] == " ") {
      return spaces[space];
    }
    space++;
  }
}

function printBoard() : void {
  console.clear();
  console.log(" " + gameBoard[0] + " | " + gameBoard[1] + " | " + gameBoard[2] + "  |  " + "1" + " | " + "2" + " | " + "3");
  printDivider();
  console.log(" " + gameBoard[3] + " | " + gameBoard[4] + " | " + gameBoard[5] + "  |  " + "4" + " | " + "5" + " | " + "6");
  printDivider();
  console.log(" " + gameBoard[6] + " | " + gameBoard[7] + " | " + gameBoard[8] + "  |  " + "7" + " | " + "8" + " | " + "9");
}

// function printLine(line : string[]) : void {
//   console.log(" " + line[0] + " | " + line[1] + " | " + line[2]);
// }

function printDivider() : void {
  console.log("-----------" + " | " + "-----------" );
}

function computerGo() : void {
  if (canWin("O") != null) {
    gameBoard[getOpenSpace(canWin("O"))] = "O";
  } else if (canWin("X") != null) {
    gameBoard[getOpenSpace(canWin("X"))] = "O";
  } else {
    let spaces : number[] = getOpenSpaces();
    let length : number = spaces.length;
    gameBoard[spaces[Math.floor(Math.random() * length)]] = "O";
  }
}

function makeMove(move : number) {
  gameBoard[move - 1] = "X";
}

let getInput = function() : Promise<{answer : string}> {
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
}



function play() {
  printBoard();
  getInput()
  .then((res) => {
    if (parseInt(res.answer) < 10 && parseInt(res.answer) > 0) {
      if (gameBoard[parseInt(res.answer) - 1] == " ") {
        makeMove(parseInt(res.answer))
        if (didWin("X") == "X") {
          printBoard();
          console.log("Player Wins!");
        } else {
          computerGo();
          if (didWin("O") == "O"){
            printBoard();
            console.log("Computer Wins!");
          } else {
            printBoard();
            play();
          }

        }
      } else {
        console.log("That space is taken");
        play();
      }
    }
  })
}

play();





