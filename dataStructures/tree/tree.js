const Tree = function (value) {
  let newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

let treeMethods = {};

treeMethods.addChild = function (value) {
  this.children.push(new Tree(value));
};

treeMethods.contains = function (target) {
  let found = false;
  const walkTheTree = (node, target) => {
    if (node.value === target) {
      found = true;
    } else {
      if (node.children.length !== 0) {
        for (let i = 0; i < node.children.length; i++) {
          walkTheTree(node.children[i], target);
        }
      }
    }
  }
  walkTheTree(this, target)
  return found;
};

