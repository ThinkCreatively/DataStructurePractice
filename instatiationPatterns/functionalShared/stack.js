var Stack = function() {
  let storage = {};
  storage.index = 0;
  storage.storageSize = 0;
  _.extend(storage, stackMethods);
  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.index] = value;
  this.index++;
  this.storageSize++;
};

stackMethods.pop = function() {
  let deletedChar = this[this.index - 1];
  delete this[this.index - 1];
  this.index--;
  if (this.storageSize === 0) {
    this.storageSize = 0;
  } else {
    this.storageSize--;
  }
  return deletedChar;
};

stackMethods.size = function() {
  return this.storageSize;
};