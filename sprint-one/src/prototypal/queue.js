var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.index = 0;
  someInstance.nextInQueue = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function() {
  if (this.index - this.nextInQueue > 0) {
    this.nextInQueue++;
    return this.storage[this.nextInQueue - 1];
  }
};

queueMethods.size = function() {
  return this.index - this.nextInQueue;
};

