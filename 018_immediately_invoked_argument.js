//Function expression
var moreFullName;
moreFullName = function (first, last) {
    return first + " " + last;
};
console.log(moreFullName("Bryan", "Lund"));
//emmediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Bryan', 'Lund');
//# sourceMappingURL=018_immediately_invoked_argument.js.map