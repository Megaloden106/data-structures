var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.index = 0;
  someInstance.nextInQueue = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.index] = value;
    this.index++;
  },
  
  size: function() {
    return this.index - this.nextInQueue;
  },
  
  dequeue: function() {
    if (this.index - this.nextInQueue > 0) {
      this.nextInQueue++;
      return this.storage[this.nextInQueue - 1];
    }
  },
};


