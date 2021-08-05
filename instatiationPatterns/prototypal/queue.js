var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.index = 0;
  newQueue.queueSize = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this[this.index] = value;
  this.index++;
  this.queueSize++;
};

queueMethods.dequeue = function (value) {
  let deletedChar = this[0];
  delete this[0];
  this.index--;
  for (let i = 0; i < this.index; i++) {
    if (this[i + 1] !== undefined) {
      this[i] = this[i + 1];
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
};