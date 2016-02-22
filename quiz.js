var button = document.getElementById("btn");
button.addEventListener("click", getValue);

function checkValue() {
  if (!tree.height || !tree.char) {
    alert("Please complete both fields");
  } else {
    buildTree();
  }
}

function getValue() {
  tree.height = document.getElementById("height").value;
  tree.char = document.getElementById("char").value;
  checkValue();
}

var tree = {}

function buildTree() {
  var growTree = "";
  var treeWidth = (2 * tree.height) - 1;
  for (i = 0; i < tree.height; i++) {
    var charWidth = (i * 2) + 1;
    var spaceWidth = (treeWidth - charWidth) / 2;
    for (k = 0; k < spaceWidth; k++) {
      growTree += " ";
    }
    for (j = 0; j < charWidth; j++) {
      growTree += tree.char;
    }
    growTree += '\n'
  }
  console.log(growTree);
}
