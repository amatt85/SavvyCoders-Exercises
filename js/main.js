var name = "Andre";

function checkUser (username) {
  if (username == "Andre") {
    console.log("welcome, Authenticated user.");
  }
  else {
    console.log("warning, unauthorized attempt");
  }
}
checkUser(name);
