// while
var x = 0;
while (x < 10) {
    console.log(x);
    x++;
}
var b_players = [2, 3, 54, 6, 34, 7, 87, 5, 7];
console.log("for in");
// for in
for (var player_1 in b_players) {
    console.log(player_1);
}
// for of
console.log("for of");
for (var _i = 0, b_players_1 = b_players; _i < b_players_1.length; _i++) {
    var player_2 = b_players_1[_i];
    console.log(player_2);
}
//# sourceMappingURL=014_loops.js.map