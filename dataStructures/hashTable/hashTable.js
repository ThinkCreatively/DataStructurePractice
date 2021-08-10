

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < this._limit; i++) {
    this._storage.set(i, LimitedArray(this._limit));
  }
  this.tableSize = 0;
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // Check if there is a value in the bucket
  if (bucket.get(0) === undefined) {
    // Add tuple to bucket, passing in index and value
    bucket.set(0, Tuple(k, v));
    this.tableSize++;
    bucket.set(1, undefined);
  } else {
    var inputted = false;
    bucket.each(function (tuple, bucketIndex) {
      // If tuple has a value inside
      if (tuple !== undefined) {
        // If tuples key equals input key
        if (tuple.key === k) {
          // Reassign tuples value to inputted value
          tuple.value = v;
        }
      } else if (!inputted) {
        // Set undefined index to tuple
        bucket.set(bucketIndex, Tuple(k, v));
        this.tableSize++;
        bucket.set(bucketIndex + 1, undefined);
        inputted = true;
      }
    });
  }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket.get(0) !== undefined) {
    var value = null;
    bucket.each((tuple, bucketIndex) => {
      if (tuple !== undefined && tuple.key === k) {
        value = tuple.value;
      }
    });
    return value;
  }
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var hasBeenRemoved = false;
  bucket.each((tuple, bucketIndex) => {
    if (tuple !== undefined && tuple.key === k) {
      bucket.set(bucketIndex, undefined);
      hasBeenRemoved = true;
      bucket.each((innerTuple, innerBucketIndex) => {
        if (innerBucketIndex > bucketIndex && innerTuple !== undefined) {
          bucket.set(innerBucketIndex, bucket.get(innerBucketIndex + 1));
        }
      });
    }
  });
  if (hasBeenRemoved) {
    this.tableSize--;
  }
};

var Tuple = function (k, v) {
  var tuple = { key: k, value: v };
  return tuple;
};
