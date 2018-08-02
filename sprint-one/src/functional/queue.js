var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  
  var index = 0;
  var nextInQueue = 0;
  
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function() {
    if (index - nextInQueue > 0) {
      nextInQueue++;
      return storage[nextInQueue - 1];
    }
  };

  someInstance.size = function() {
    return index - nextInQueue;
  };

  return someInstance;
};
