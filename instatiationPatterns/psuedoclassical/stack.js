var Stack = function () {
  this.storage = {};
  this.index = 0;
  this.stackSize = 0;
};

Stack.prototype.push = function (value) {
  this[this.index] = value;
  this.index++;
  this.stackSize++;
}

Stack.prototype.pop = function () {
  let deletedChar = this[this.index - 1];
  delete this[this.index - 1];
  this.index--;
  if (this.stackSize === 0) {
    this.stackSize = 0;
  } else {
    this.stackSize--;
  }
  return deletedChar;
}

Stack.prototype.size = function () {
  return this.stackSize;
}


var NewStack = new Stack();