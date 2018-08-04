var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToHead = function(value) {
    // create new node
    var newNode = Node(value);
    // if the list is empty
    if (list.head === null) {
      // head points to new node
      list.head = newNode;
      // tail points to new node
      list.tail = newNode;
    // otherwise
    } else {
      // newNode next points to current head
      newNode.next = list.head;
      // head prev points to new node
      list.head.prev = newNode;
      // head points to new node
      list.head = newNode;
    }
  };

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      // newNode previous points to current tail
      newNode.prev = list.tail;
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var head = list.head.value;
      list.head = list.head.next;
      if (list.head !== null) {
        // add previous pointer to head node that points to null
        list.head.prev = null;
      }
      return head;
    } else {
      return null;
    }
  };
  
  list.removeTail = function(value) {
    // store tail value into variable
    var tail = list.tail.value;
    // move tail pointer to previous node
    list.tail = list.tail.prev;
    if (list.tail !== null) {
      // assign updated tail's next pointer to null
      list.tail.next = null;
    }
    // return stored value of old tail
    return tail;
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
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail() - O(1) 
 * removeHead() - O(1)
 * contains() - O(n) looking at each node
 */
 
 

