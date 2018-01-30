var fullNameB = (first,last) => {
  return first + " " + last;
}

console.log(fullNameB("Bryan","Lund"));

var gradeGeneratorA = (grade: number) : string => {
  if (grade < 60) {
    return "F";
  } else if (grade >= 60 && grade < 70) {
    return 'D';
  } else if (grade >= 70 && grade < 80) {
    return 'C';
  } else if (grade >= 80 && grade < 90) {
    return 'B';
  } else {
    return 'A';
  }
}

console.log(gradeGeneratorA(45));
console.log(gradeGeneratorA(62));
console.log(gradeGeneratorA(80));
console.log(gradeGeneratorA(100));