/**
 * An implementation of a Queue in Javascript. 
 * 
 * Standard queue functions.
 */
module.exports = class Queue {
  constructor() {
    this.elements = [];
  }

  enqueue(element) {
    this.elements.push(element);
  }

  dequeue() {
    return this.elements.shift();
  }

  peek() {
    return this.elements[0];
  }

  size() {
    return this.elements.length;
  }

  isEmpty() {
    return (this.elements.length === 0);
  }

  clear() {
    this.elements = [];
  }

  toString() {
    return this.elements.join(' ');
  }

  print() {
    console.log(this.toString());
  }
};
