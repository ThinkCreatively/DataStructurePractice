var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    let currentNode = this.head;
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      while (currentNode.value !== null) {
        if (currentNode.next === null) {
          currentNode.next = new Node(value);
          this.tail = currentNode.next;
          return;
        }
        currentNode = currentNode.next;
      }
    }
  };

  list.removeHead = function () {
    currentNode = this.head;
    delete this.head;
    this.head = currentNode.next;
    return currentNode.value;
  };

  list.contains = function (target) {
    let currentNode = this.head;
    while(currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
