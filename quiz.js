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
  var repeated = char.repeat(numHeight + 2);

for (i = 1; i <= numHeight; i++) {
  console.log("tree", i, repeated);



}




})







