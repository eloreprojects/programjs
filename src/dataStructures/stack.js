/**
 * An implementation of a Stack in Javascript.
 */
module.exports = class Stack {
  /**
   * @constructor
   */
  constructor() {
    this.elements = [];
  }
  /**
   * Add an element to the top of the stack.
   * 
   * @param {*} element the element to be added to the top of the stack
   */
  push(element) {
    this.elements.push(element);
  }
  /**
  * Remove and return the top element (provided the stack is not empty).
  * If the stack is empty, the method will return null.
  * 
  * @return {*} null if the stack is empty, otherwise the top element
  */
  pop() {
    return this.elements.pop();
  }
  /**
  * Return the top element of the stack without removing it (provided
  * the stack is not empty). If it is, then the method will return null.
  * 
  * @return {*} null if the stack is empty, otherwise the top element
  */
  peek() {
    return this.elements[this.elements.length - 1];
  }
  /**
  * Will return the number of elements in the stack.
  *
  * @return {Number} the number of elements in the stack
  */
  size() {
    return this.elements.length;
  }
  /**
 * Will return a boolean representing if the stack is empty or not.
 *
 * @return {Boolean} true if the stack is empty, otherwise false
 */
  isEmpty() {
    return (this.elements.length === 0);
  }
  /**
   * Will reset the stack by removing all elements.
   */
  clear() {
    this.elements = [];
  }
  /**
   * Will retrun a string containing all the elements of the stack.
   * 
   * @return {String} containing all the elements in the stack
   */
  toString() {
    return this.elements.join(' ');
  }
  /**
   * Will print the string represetnation of the stack.
   */
  print() {
    console.log(this.toString());
  }
};
