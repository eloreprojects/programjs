const Node = require('./node');

/**
 * An implementation of a SinglyLinkedList in Javascript.
 */
module.exports = class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  getNode(index) {
    let node = this.head;
    if (this.head === null || index >= this.size) {
      return null;
    }
    for (let i = 0; i < index; i += 1) {
      node = node.next;
    }
    return node;
  }

  get(index) {
    const node = this.getNode(index);
    if (node === null) {
      return null;
    }
    return node.value;
  }

  size() {
    return this.size;
  }

  add(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = node;
    }
    this.size += 1;
  }

  set(index, value) {
    const oldValue = this.get(index);
    this.getNode(index).value = value;
    return oldValue;
  }

  remove(index) {
    const oldValue = this.get(index);
    if (index === 0) { // first node
      this.head = this.head.next;
    } else if (index === this.size - 1) { // last node
      this.getNode(index - 1).next = null;
    } else {
      this.getNode(index - 1).next = this.getNode(index + 1);
    }
    this.size -= 1;
    return oldValue;
  }
};
