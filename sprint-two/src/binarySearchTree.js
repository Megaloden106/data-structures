var BinarySearchTree = function(value) {
  var tree = Object.create(BSTMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  tree.depth = [value];
  tree.isParent = true;
  tree.parent = null;
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
      this.left.parent = this;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
      this.right.isParent = false;
      this.right.parent = this;
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

BSTMethods.removeFromParent = function(value) {
  if (this.value === value) {
    if (this.parent.value > value) {
      this.parent.left = null;
    } else {
      this.parent.right = null;
    }
    this.parent = null;
    return this;
  } else if (this.value > value) {
    if (this.left !== null) {
      return this.left.removeFromParent(value);
    }
  } else {
    if (this.right !== null) {
      return this.right.removeFromParent(value);
    }
  }
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


