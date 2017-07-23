/**
 * An implementation of a DoubleNode in Javascript.
 */
module.exports = class DoubleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  getValue() {
    return this.value;
  }

  setValue(newValue) {
    var oldValue = this.value;
    this.value = newValue;
    return oldValue;
  }

  hasNext() {
    return (this.next !== null);
  }

  hasPrevious() {
    return (this.previous !== null);
  }

  getNext() {
    var n = null;
    if (this.hasNext()) {
      n = this.next;
    }
    return n;
  }

  getNext() {
    var n = null;
    if (this.hasPrevious()) {
      n = this.previous;
    }
    return n;
  }

  setNext(newNext) {
    var oldNext = this.next;
    this.next = newNext;
    return oldNext;
  }

  setNext(newPrevious) {
    var oldPrevious = this.previous;
    this.previous = newPrevious;
    return oldPrevious;
  }
}

