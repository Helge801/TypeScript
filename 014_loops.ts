// while

var x : number = 0;

while (x < 10) {
  console.log(x);
  x++;
}

let b_players : number[] = [2,3,54,6,34,7,87,5,7]
console.log("for in")
// for in
for (let player in b_players){
  console.log(player);
}


// for of
console.log("for of");
for (let player of b_players){
  console.log(player);
}