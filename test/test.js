const expect = require('chai').expect;

const singlyLinkedListTest = require('./singlyLinkedListTest');
const doublyLinkedListTest = require('./doublyLinkedListTest');
const stackTest = require('./stackTest');
const queueTest = require('./queueTest');
const binarySearchTreeTest = require('./binarySearchTreeTest');

const bubbleSortTest = require('./bubbleSortTest');
const insertionSortTest = require('./insertionSortTest');
const selectionSortTest = require('./selectionSortTest');
const mergeSortTest = require('./mergeSortTest');
const factorialTest = require('./factorialTest');

describe('SinglyLinkedList add() and get() test', () => {
  it('SinglyLinkedList failed test for add() and get()', () => {
    expect(singlyLinkedListTest.testAddAndGet()).to.equal(true);
  });
});

describe('SinglyLinkedList set() test', () => {
  it('SinglyLinkedList failed test for set()', () => {
    expect(singlyLinkedListTest.testSet()).to.equal(true);
  });
});

describe('SinglyLinkedList remove() test', () => {
  it('SinglyLinkedList failed test for remove()', () => {
    expect(singlyLinkedListTest.testRemove()).to.equal(true);
  });
});

describe('DoublyLinkedList add() and get() test', () => {
  it('DoublyLinkedList failed test for add() and get()', () => {
    expect(doublyLinkedListTest.testAddAndGet()).to.equal(true);
  });
});

describe('DoublyLinkedList add() at specific index and get() test', () => {
  it('DoublyLinkedList failed test for add() at specific index and get()', () => {
    expect(doublyLinkedListTest.testSpecificAddAndGet()).to.equal(true);
  });
});

describe('DoublyLinkedList set() test', () => {
  it('DoublyLinkedList failed test for set()', () => {
    expect(doublyLinkedListTest.testSet()).to.equal(true);
  });
});

describe('DoublyLinkedList remove() test', () => {
  it('DoublyLinkedList failed test for remove()', () => {
    expect(doublyLinkedListTest.testRemove()).to.equal(true);
  });
});

describe('Stack push() test', () => {
  it('Stack failed test for push()', () => {
    expect(stackTest.testPush()).to.equal(true);
  });
});

describe('Stack peek() test', () => {
  it('Stack failed test for peek()', () => {
    expect(stackTest.testPeek()).to.equal(true);
  });
});

describe('Stack pop() test', () => {
  it('Stack failed test for pop()', () => {
    expect(stackTest.testPop()).to.equal(true);
  });
});

describe('Stack size() test', () => {
  it('Stack failed test for size()', () => {
    expect(stackTest.testSize()).to.equal(true);
  });
});

describe('Stack clear() and isEmpty() test', () => {
  it('Stack failed test for clear() and isEmpty()', () => {
    expect(stackTest.testIsEmptyAndClear()).to.equal(true);
  });
});

describe('Queue enqueue() test', () => {
  it('Queue failed test for enqueue()', () => {
    expect(queueTest.testEnqueue()).to.equal(true);
  });
});

describe('Queue dequeue() test', () => {
  it('Queue failed test for dequeue()', () => {
    expect(queueTest.testDequeue()).to.equal(true);
  });
});

describe('Queue peek() test', () => {
  it('Queue failed test for peek()', () => {
    expect(queueTest.testPeek()).to.equal(true);
  });
});

describe('Queue size() test', () => {
  it('Queue failed test for size()', () => {
    expect(queueTest.testSize()).to.equal(true);
  });
});

describe('Queue clear() and isEmpty() test', () => {
  it('Queue failed test for clear() and isEmpty()', () => {
    expect(queueTest.testIsEmptyAndClear()).to.equal(true);
  });
});

describe('BinarySearchTree - Inorder Traversal test', () => {
  it('BinarySearch tree failed to give sorted list', () => {
    expect(binarySearchTreeTest()).to.equal(true);
  });
});

describe('Bubble sort test', () => {
  it('Bubble sort failed to give sorted list', () => {
    expect(bubbleSortTest()).to.equal(true);
  });
});

describe('Insertion sort test', () => {
  it('Insertion sort failed to give sorted list', () => {
    expect(insertionSortTest()).to.equal(true);
  });
});

describe('Selection sort test', () => {
  it('Selection sort failed to give sorted list', () => {
    expect(selectionSortTest()).to.equal(true);
  });
});

describe('Merge sort test', () => {
  it('Merge sort failed to give sorted list', () => {
    expect(mergeSortTest()).to.equal(true);
  });
});

describe('#factorialTest', () => {
  it('should pass factorial test', () => {
    expect(factorialTest()).to.equal(true);
  });
});
