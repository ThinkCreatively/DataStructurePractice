class Queue {
  constructor() {
    this.storage = {};
    this.index = 0;
    this.queueSize = 0;
  }

  enqueue(value) {
    this[this.index] = value;
    this.index++;
    this.queueSize++;
  }

  dequeue() {
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
  }

  size() {
    return this.queueSize;
  }
}

var newQueue = new Queue();