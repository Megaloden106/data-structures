class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.index = 0;
    this.nextInQueue = 0;
  }

  enqueue(value) {
    this.storage[this.index] = value;
    this.index++;
  }
  
  dequeue() {
    if (this.index - this.nextInQueue > 0) {
      this.nextInQueue++;
      return this.storage[this.nextInQueue - 1];
    }
  }
  
  size() {
    return this.index - this.nextInQueue;
  }
}
