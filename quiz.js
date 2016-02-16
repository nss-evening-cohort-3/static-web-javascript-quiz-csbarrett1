var button = document.getElementById("btn");

button.addEventListener("click", function(event) {
  var height = document.getElementById("height").value;
  var char = document.getElementById("char").value;

if (height != parseInt(height)) {
  alert("Please enter an integer");
}

if (char === "") {
  alert("Both fields must be complete");
}

  var numHeight = parseInt(height);

for (char = 0; char <= numHeight; char++) {
  console.log("tree", char); 
}



})







