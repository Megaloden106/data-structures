

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._collHandler = {};
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  while (this._storage.get(index) !== undefined && !(k in this._collHandler)) {
    index++;
  }
  this._collHandler[k] = index;
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (k in this._collHandler) {
    index = this._collHandler[k];
  }
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert(): O(1) w/o collisions, O(n) for collisions
 * retrieve(): O(1)
 * remove(): O(1)
 */


