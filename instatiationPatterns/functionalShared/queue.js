var Queue = function () {
  var newQueue = {};
  newQueue.index = 0;
  newQueue.queueSize = 0;
  extend(newQueue, queueMethods);
  return newQueue;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this[this.index] = value;
  this.index++;
  this.queueSize++;
};

queueMethods.dequeue = function () {
  let deletedChar = this[0];
  delete this[0];
  this.index--;
  for (let i = 0; i < this.index; i++) {
    if (this[i + 1] !== undefined) {
      this[i] = this[i + 1];
    } else {
      return;
    }
  }
  if (this.queueSize === 0) {
    this.queueSize = 0;
  } else {
    this.queueSize--;
  }
  return deletedChar;
};

queueMethods.size = function () {
  return this.queueSize;
}