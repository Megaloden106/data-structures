var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      var newNode = Node(value);
      list.head = newNode;
      list.tail = newNode;
    } else {
      var newNode = Node(value);
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var head = list.head.value;
    list.head = list.head.next;
    return head;
  };

  list.contains = function(target) {
    var node = list.head;
    while (node !== null) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail() - O(1) 
 * removeHead() - O(1)
 * contains() - O(n) looking at each node
 */
 
 

