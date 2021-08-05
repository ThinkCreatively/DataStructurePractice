var Stack = function () {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.index = 0;
  newStack.stackSize = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.index] = value;
  this.index++;
  this.stackSize++;
};

stackMethods.pop = function() {
  let deletedChar = this[this.index - 1];
  delete this[this.index - 1];
  this.index--;
  if (this.stackSize === 0) {
    this.stackSize = 0;
  } else {
    this.stackSize--;
  }
  return deletedChar;
};

stackMethods.size = function() {
  return this.stackSize;
};