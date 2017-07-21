module.exports = class Stack {
  constructor() {
    this.elements = [];
  }
  push(element) {
    this.elements.push(element);
  }
  pop() {
    return this.elements.pop();
  }
  peek() {
    return this.elements[this.elements.length - 1];
  }
  size() {
    return this.elements.length;
  }
  toString() {
    return this.elements.join(' ');
  }
  print() {
    console.log(this.toString());
  }
};
