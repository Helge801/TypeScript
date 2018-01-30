// functions have access to any public variables in the outer scope
// function nameFunction(name: string) : void {
//   var n : string = name;
//   function printName(){
//    console.log(n)
//   }
//   printName();
// }
// nameFunction('Bryan');
//**************************************
// Inner functions maintain access to the outer scope even after the value is returned
// function nameFunction(name: string) {
//   var n : string = name;
//   return function() {
//     console.log(n);
//   }
// }
//  var nameAgain = nameFunction('Bryan');
//  nameAgain();
//**************************************
function lineup() {
    var nowBatting = 1;
    return {
        nextBatter: function () { nowBatting++; },
        currentBatter: function () { return nowBatting; }
    };
}
var batters = lineup();
var pitchers = lineup();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(pitchers.currentBatter());
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
//# sourceMappingURL=019_closure_intro.js.map