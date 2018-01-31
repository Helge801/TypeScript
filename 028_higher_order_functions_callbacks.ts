var dbQuery = function() : void {
  setTimeout(() => {
    console.log('Query Results');
  }, 3000);
}

function loadPage(q : () => void) {
  console.log("Header");
  q();
  console.log("SideBar");
  console.log("Footer");
}

loadPage(dbQuery);

// a higher order function is a function that takes another function as an argument
//That argument is called a call back