var Blog;
(function (Blog) {
    var Post = /** @class */ (function () {
        function Post(post) {
            this.title = post.title;
            this.body = post.body;
        }
        Post.prototype.printPost = function () {
            console.log(this.title);
            console.log(this.body);
        };
        return Post;
    }());
    Blog.Post = Post;
})(Blog || (Blog = {}));
var Content;
(function (Content) {
    var Post = /** @class */ (function () {
        function Post(post) {
            this.title = post.title;
            this.body = post.body;
            this.slug = post.slug;
            this.seoKeywords = post.seoKeywords;
        }
        Post.prototype.printPost = function () {
            console.log(this.title);
            console.log(this.body);
        };
        return Post;
    }());
    Content.Post = Post;
})(Content || (Content = {}));
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
//# sourceMappingURL=026_name_spaces.js.map