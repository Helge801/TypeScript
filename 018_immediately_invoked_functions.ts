var moreNames : string[] = ["Bryan","Lund","Bob"];
var counter : number = 0;

(function() {
  for(let name in moreNames) {
    counter++;
  }
})();

console.log(counter);