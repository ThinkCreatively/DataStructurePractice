const Stack = function () {
  const someInstance = {};

  // Using a object with numeric keys to store values
  const storage = {};
  let index = 0;
  let size = 0;

  // Methods

  someInstance.push = function (value) {
    storage[index] = value;
    index++;
    size++;
  };

  someInstance.pop = function () {
    temp = index - 1;
    let deletedChar = storage[0];
    if (index !== 0) {
      deletedChar = storage[index - 1];
    }
    delete storage[index - 1];
    index = temp;
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