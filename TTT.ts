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