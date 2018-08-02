var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  
  var index = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.pop = function() {
    if (index !== 0) {
      index--;
      var last = storage[index];
      delete storage[index];
      return last;
    }
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};