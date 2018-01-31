// Loosely connected Interface with class
interface UserA {
  email : string,
  firstName? : string,
  lastname? : string
}

class Admin {
  role : string;
  constructor(public email : string) {
    this.role = 'Admin';
  }
}

function profileA(user : UserA) : string {
  return `Welcome, ${user.email}`;
}

var joe = new Admin('joe@ex.com');

console.log(joe.role);
console.log(profileA(joe));

// Direct implimentation

interface IPost {
  title : string;
  body : string;
}

class Post implements IPost {
  title : string;
  body : string;

  constructor(post : IPost) {
    this.title = post.title;
    this.body = post.body;
  }

  printPost() {
    console.log(this.title);
    console.log(this.body);
  }
}

var post = new Post({title: "My great title", body: "Some content"});
console.log(post.title);
console.log(post.body);
post.printPost();