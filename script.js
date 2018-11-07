function console() {
  console.log("Hello World!");
}

function popup() {
  window.alert("Hello World!");
}

function page(){
  document.getElementById("hellos").innerHTML = "Hello World!";
}

function name1() {
  var input = prompt("Enter your name:");
  document.getElementById("names").innerHTML = "Hello " + input;
}
