console.log(fullNameAgain("Bryan","Lund"));
// console.log(otherFullName("Bryan","Lund"));
// console.log(thirdFullName("Bryan","Lund"));


// Function decleration
function fullNameAgain(first : string, last : string) : string {
  return first + " " + last;
}

//Function Expression
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
  return first + " " + last;
}

//Function Something else
var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
  return first + " " + last;
}
