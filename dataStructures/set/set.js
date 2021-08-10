var Set = function () {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function (item) {
  this._storage[item] = item;
};

setPrototype.contains = function (item) {
  for (key in this._storage) {
    if (this._storage[item] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function (item) {
  for (key in this._storage) {
    if (this._storage[item] === item) {
      delete this._storage[item];
    }
  }
};
