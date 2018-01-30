// function printAddress(street: string, streetTwo?: string, state = "AZ") {
//   console.log(street);
//   if(streetTwo){
//     console.log(streetTwo);
//   }
//   console.log(state);
// }
// printAddress("123","any street");
// printAddress("123");
// printAddress("123","any street");
// printAddress("123","any street","UT");
function lineupCard(team) {
    var morePlayers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        morePlayers[_i - 1] = arguments[_i];
    }
    console.log('Team: ' + team);
    for (var _a = 0, morePlayers_1 = morePlayers; _a < morePlayers_1.length; _a++) {
        var player_1 = morePlayers_1[_a];
        console.log(player_1);
    }
}
lineupCard("Astros", "Altuve", "Correra", "Bregman");
//# sourceMappingURL=016_function_args.js.map