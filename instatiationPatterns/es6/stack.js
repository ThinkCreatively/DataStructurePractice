
class Stack {
  constructor() {
    this.storage = {};
    this.index = 0;
    this.stackSize = 0;
  }

  push(value) {
    this[this.index] = value;
    this.index++;
    this.stackSize++;
  }

  pop() {
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

  size() {
    return this.stackSize;
  }

}

var newStack = new Stack();