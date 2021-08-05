var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let index = 0;
  let size = 0;

  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[index] = value;
    index++;
    size++;
  };

  someInstance.dequeue = function () {
    let deletedChar = storage[0];
    delete storage[0];
    for (let i = 0; i < size; i++) {
      storage[i] = storage[i + 1];
    }
    index--;
    if (size === 0) {
      size = 0;
    } else {
      size--;
    }
    return deletedChar;
  };

  someInstance.size = function () {
    return size;
  };

  return someInstance;
};