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

function lineupCard(team: string, ...morePlayers: string[]){
  console.log('Team: ' + team);
  for (let player of morePlayers) {
    console.log(player);
  }
}

lineupCard("Astros","Altuve","Correra","Bregman");