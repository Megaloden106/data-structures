var BinarySearchTree = function(value) {
  var tree = Object.create(BSTMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  tree.depth = [value];
  tree.isParent = true;
  return tree;
};

var BSTMethods = {};

BSTMethods.insert = function(value) {
  if (this.isParent) {
    this.depth.push(value);
  }
  if (this.value === value ) {
    throw new Error('Node already exists');
  } else if (this.value > value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
      this.left.isParent = false;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
      this.right.isParent = false;
    } else {
      this.right.insert(value);
    }
  }
};

BSTMethods.contains = function(value) {
  var result = false;
  if (this.value === value) {
    result = true;
  } else if (this.value > value) {
    if (this.left !== null) {
      result = this.left.contains(value);
    }
  } else {
    if (this.right !== null) {
      result = this.right.contains(value);
    }
  }
  return result;
};

BSTMethods.depthFirstLog = function(callback) {
  for (var tree of this.depth) {
    callback(tree);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * contain: O(n) worst case, O(log n) best case completely balanced
 * insert: O(1)
 * depthFirstLog: O(n) only cycling through depth array
 */


