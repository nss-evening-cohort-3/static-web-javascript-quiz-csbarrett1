//Assign the button(btn) to a variable (button).
var button = document.getElementById("btn");
//Create click event for the button that runs the function "getValue".
button.addEventListener("click", getValue);

//Create a function called "getValue" that assigns the values of the inputs to the "tree" object.
function getValue() {
  var tree = {};
  tree.height = document.getElementById("height").value;
  tree.char = document.getElementById("char").value;
//Runs a if/else statement function to check if user has filled out both inputs.
  checkValue(tree);
}

//If either of the input are not completed, alert the user to do so. 
function checkValue(tree) {
  if (!tree.height || !tree.char) {
    alert("Please complete both fields");
//If both inputs are completed, run the function "buildTree" with the "tree" object passed into it.
  } else {
    buildTree(tree);
  }
};


function buildTree(tree) {
//Create empty variable that will have the info added to it.
  var growTree = "";
//Set the base width of tree
  var treeWidth = (2 * tree.height) - 1;
//Run a for loop that reduces the number of characters going up from the base. These are the "leaves".
  for (i = 0; i < tree.height; i++) {
    var charWidth = (i * 2) + 1;
//Set the space width that change per row of the tree
    var spaceWidth = (treeWidth - charWidth) / 2;
    for (k = 0; k < spaceWidth; k++) {
//Set the space character
      growTree += " ";
    }
//Sets the leaf character to the inputed char
    for (j = 0; j < charWidth; j++) {
      growTree += tree.char;
    }
//Does a line break each time the function loops
    growTree += '\n'
  }
  console.log(growTree);
}
