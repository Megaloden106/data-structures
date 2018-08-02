var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.index = 0;
  this.nextInQueue = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Queue.prototype.dequeue = function() {
  if (this.index - this.nextInQueue > 0) {
    this.nextInQueue++;
    return this.storage[this.nextInQueue - 1];
  }
};

Queue.prototype.size = function() {
  return this.index - this.nextInQueue;
};


