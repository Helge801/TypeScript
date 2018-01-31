var dbQuery = function () {
    setTimeout(function () {
        console.log('Query Results');
    }, 3000);
};
function loadPage(q) {
    console.log("Header");
    q();
    console.log("SideBar");
    console.log("Footer");
}
loadPage(dbQuery);
// a higher order function is a function that takes another function as an argument
//That argument is called a call back 
//# sourceMappingURL=028_higher_order_functions_callbacks.js.map