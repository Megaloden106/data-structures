var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  return item in this._storage;
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    delete this._storage[item];
  } else {
    throw new Error('item does not exist')
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add, contains, remove: O(1)
 */
