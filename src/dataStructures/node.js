/**
 * An implementation of a Node in Javascript.
 */
module.exports = class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  getValue() {
    return this.value;
  }

  hasNext() {
    return (this.next !== null);
  }

  getNext() {
    let n = null;
    if (this.hasNext()) {
      n = this.next;
    }
    return n;
  }

  setValue(newValue) {
    const oldValue = this.value;
    this.value = newValue;
    return oldValue;
  }

  setNext(newNext) {
    const oldNext = this.next;
    this.next = newNext;
    return oldNext;
  }
};
