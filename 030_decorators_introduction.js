var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Post = /** @class */ (function () {
    function Post() {
    }
    Post.prototype.someFunction = function () { };
    __decorate([
        proccessOne(),
        proccesstwo(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Post.prototype, "someFunction", null);
    return Post;
}());
function proccessOne() {
    console.log("PR one has run");
    return function (target, propertyKey, descriptor) {
        console.log("PR one has been called");
    };
}
function proccesstwo() {
    console.log("PR two has run");
    return function (target, propertyKey, descriptor) {
        console.log("PR two has been called");
    };
}
//# sourceMappingURL=030_decorators_introduction.js.map