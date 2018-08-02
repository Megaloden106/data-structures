var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.index = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  size: function() {
    return this.index;
  },
  
  push: function(value) {
    this.storage[this.index] = value;
    this.index++;
  },
  
  pop: function() {
    if (this.index > 0) {
      this.index--;
      return this.storage[this.index];
    }
  } 
  
};


