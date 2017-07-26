const DoubleNode = require('./doubleNode');

/**
 * An implementation of a DoublyLinkedList in Javascript.
 */
module.exports = class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.end = null;
    this.size = 0;
  }

  toString() {
    let node = this.head;
    if (node === null) {
      return '[]';
    }
    let output = '';
    while (node.next !== null) {
      output += `${node.value}, `;
      node = node.next;
    }
    return `${output} ${node.value}`;
  }

  getNodeFromFirst(index) {
    let current = this.head;
    for (let i = 0; i < index; i += 1) {
      current = current.next;
    }
    return current;
  }

  getNodeFromLast(index) {
    let current = this.end;
    for (let i = this.size - 1; i > index; i -= 1) {
      current = current.previous;
    }
    return current;
  }

  getNode(index) {
    if (index > this.size / 2) {
      return this.getNodeFromLast(index);
    }
    return this.getNodeFromFirst(index);
  }

  get(index) {
    return this.getNode(index).value;
  }

  getFirst() {
    if (this.head !== null) {
      return this.head.value;
    }
    return null;
  }

  getLast() {
    if (this.end !== null) {
      return this.end.value;
    }
    return null;
  }

  length() {
    return this.size;
  }

  set(index, newValue) {
    const oldValue = this.get(index);
    this.getNode(index).value = newValue;
    return oldValue;
  }

  add(value, index) {
    if (index === null) {
      const newNode = new DoubleNode(value);
      if (this.size === 0) {
        this.head = newNode;
      } else if (this.size === 1) {
        this.end = newNode;
        this.head.next = this.end;
        this.end.previous = this.head;
      } else {
        this.end.next = newNode;
        newNode.previous = this.end;
        this.end = newNode;
      }
    } else {
      const newNode = new DoubleNode(value);
      const oldNode = this.getNode(index);
      if (index === 0) {
        if (this.head !== null) {
          this.head.previous = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
      } else {
        newNode.previous = oldNode.previous;
        newNode.previous.next = newNode;
        oldNode.previous = newNode;
        newNode.next = oldNode;
      }
      if (this.size === 1) {
        this.end = this.head.next;
      }
    }
    this.size += 1;
  }

  addFirst(value) {
    const newNode = new DoubleNode(value);
    if (this.ize === 0) {
      this.head = newNode;
    } else if (this.size === 1) {
      this.end = this.head;
      this.head = newNode;
      this.head.next = this.end;
      this.end.previus = this.head;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    this.size += 1;
  }

  addLast(value) {
    this.add(value);
  }

  remove(index) {
    const oldValue = this.get(index);
    const oldNode = this.getNode(index);
    let node;
    if (index === 0) {
      node = this.head.next;
      if (node !== null) {
        node.previous = null;
        this.head.next = null;
      }
      this.head = node;
    } else if (index === this.size - 1) {
      node = this.end.previous;
      node.next = null;
      this.end.previous = null;
      this.end = node;
    } else {
      const previousNode = oldNode.previous;
      const nextNode = oldNode.next;
      previousNode.next = nextNode;
      nextNode.previous = previousNode;
    }
    this.size -= 1;
    return oldValue;
  }

  removeFirst() {
    return this.remove(0);
  }

  removeLast() {
    return this.remove(this.size - 1);
  }
};
