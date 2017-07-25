/**
 * An implementation of a Stack in Javascript.
 * 
 * Standard stack functions.
 */
module.exports = class Stack {
  constructor() {
    this.elements = [];
  }

  push(element) {
    this.elements.push(element);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.elements.pop();
    }
    return null;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.elements[this.elements.length - 1];
    }
    return null;
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
