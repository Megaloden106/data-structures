var BinarySearchTree = function(value) {
  var tree = Object.create(BSTMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  tree.parent = null;
  tree.depth = 1;
  return tree;
};

var BSTMethods = {};

BSTMethods.insert = function(value) {
  if (this.value === value ) {
    throw new Error('Node already exists');
  } else if (this.value > value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
      this.left.parent = this;
      this.left._updateDepth();
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
      this.right.parent = this;
      this.right._updateDepth();
    } else {
      this.right.insert(value);
    }
  }
};

BSTMethods._updateDepth = function() {
  var depthL = 0;
  var depthR = 0;
  if (this.parent !== null) {
    if (this.left !== null) {
      depthL = this.left.depth;
    }
    if (this.right !== null) {
      depthR = this.right.depth;
    }
    if (Math.abs(depthL - depthR) > 1) {
      var parent = this.parent;
      var branch = this.removeFromParent(this.value);
      branch = branch._rebalance();
      branch.parent = parent;
      if (branch.value < parent.value) {
        parent.left = branch;
      } else {
        parent.right = branch;
      }
    } else if (this.depth === this.parent.depth) {
      this.parent.depth++;
      this.parent._updateDepth();
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
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

BSTMethods._rebalance = function() {
  var depth = [];
  this.depthFirstLog(function (value) {
    depth.push(value);
  });
  depth.sort(function(a, b) {
    return a - b;
  });
  var branch;
  var buildBranch = function(sortedArray) {
    if (sortedArray.length > 0) {
      var midpoint = Math.floor(sortedArray.length / 2);
      var firstHalf = sortedArray.slice(0, midpoint);
      var secondHalf = sortedArray.slice(midpoint + 1);
      if (branch === undefined) {
        branch = BinarySearchTree(sortedArray[midpoint]);
      } else {
        branch.insert(sortedArray[midpoint]);
      }
      buildBranch(firstHalf);
      buildBranch(secondHalf);
    }
  };
  buildBranch(depth);
  return branch;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * contain: O(n) worst case, O(log n) best case completely balanced
 * insert: O(1)
 * depthFirstLog: O(n) only cycling through depth array
 */


