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
// function getOpenSpaces() : number[] {
//   for (let )
// } 
//# sourceMappingURL=TTT.js.map