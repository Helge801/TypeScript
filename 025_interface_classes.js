var Admin = /** @class */ (function () {
    function Admin(email) {
        this.email = email;
        this.role = 'Admin';
    }
    return Admin;
}());
function profileA(user) {
    return "Welcome, " + user.email;
}
var joe = new Admin('joe@ex.com');
console.log(joe.role);
console.log(profileA(joe));
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
var post = new Post({ title: "My great title", body: "Some content" });
console.log(post.title);
console.log(post.body);
post.printPost();
//# sourceMappingURL=025_interface_classes.js.map