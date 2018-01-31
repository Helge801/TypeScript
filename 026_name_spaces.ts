namespace Blog {
  export interface IPost {
    title : string;
    body : string;
  }

  export class Post implements IPost {
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
}

namespace Content {
  export interface IPost {
    title : string;
    body : string;
    slug : string;
    seoKeywords : string;
  }

  export class Post implements IPost {
    title : string;
    body : string;
    slug : string;
    seoKeywords : string;

    constructor(post : IPost) {
      this.title = post.title;
      this.body = post.body;
      this.slug = post.slug;
      this.seoKeywords = post.seoKeywords;
    }

    printPost() {
      console.log(this.title);
      console.log(this.body);
    }
  }
}

var blogPost = new Blog.Post({
  title: "Mygreat title",
  body: "my great body"
});

blogPost.printPost();

var contentPost = new Content.Post({
  title: "Mygreat title",
  body: "my great body",
  slug: "Mygreat title",
  seoKeywords: "Mygreat title"
});

contentPost.printPost();








