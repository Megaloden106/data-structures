class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.index = 0;
  }
  
  push(value) {
    this.storage[this.index] = value;
    this.index++;
  }
  
  pop() {
    if (this.index > 0) {
      this.index--;
      var last = this.storage[this.index];
      delete this.storage[this.index];
      return last;
    }
  }
  
  size() {
    return this.index;
  }

}