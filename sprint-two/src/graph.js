

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (node in this.storage);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (node in this.storage) {
    for (var edge of this.storage[node]) {
      this.storage[edge].splice(this.storage[edge].indexOf(node), 1);
    }
    delete this.storage[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.storage[fromNode].splice(this.storage[fromNode].indexOf(toNode), 1);
  this.storage[toNode].splice(this.storage[toNode].indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.storage) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode() - O(1)
 * contains() - O(1) - property look of object
 * removeNode() - O(n^2) -  for loop with nested indexof
 * hasEdge() - O(n) - array includes lookup
 * addEdge() - O(1) - push to array
 * removeEdge() - O(n) - 2 indexof not nested
 * forEachNode() - O(n), but depends whether cb function has any time complexity
 */
 


