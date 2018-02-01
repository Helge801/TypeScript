class Post {
  @proccessOne()
  @proccesstwo()
  someFunction() {}
}

function proccessOne() {
  console.log("PR one has run");
  return function (target, propertyKey : string, descriptor : PropertyDescriptor) {
    console.log("PR one has been called");
  }
}

function proccesstwo() {
  console.log("PR two has run");
  return function (target, propertyKey : string, descriptor : PropertyDescriptor) {
    console.log("PR two has been called");
  }
}
