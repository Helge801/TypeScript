//Function expression
var moreFullName : (first : string, last : string) => string;

moreFullName = function (first : string, last : string) {
  return first + " " + last;
}

console.log(moreFullName("Bryan","Lund"));

//emmediately invoked version

(function(first : string, last : string) {
  console.log(first + " " + last);
})('Bryan','Lund');