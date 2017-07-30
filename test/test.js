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
const combinationsTest = require('./combinationsTest');

// Example for running data structure test - note the 'only' attribute on `describe`
describe.only('SinglyLinkedList test', () => {
  it('SinglyLinkedList test for add() and get()', () => {
    expect(singlyLinkedListTest.testAddAndGet()).to.equal(true);
  });
  it('SinglyLinkedList test for set()', () => {
    expect(singlyLinkedListTest.testSet()).to.equal(true);
  });
  it('SinglyLinkedList test for remove()', () => {
    expect(singlyLinkedListTest.testRemove()).to.equal(true);
  });
});


describe('DoublyLinkedList test', () => {
  it('DoublyLinkedList test for add() and get()', () => {
    expect(doublyLinkedListTest.testAddAndGet()).to.equal(true);
  });
  it('DoublyLinkedList test for add() at specific index and get()', () => {
    expect(doublyLinkedListTest.testSpecificAddAndGet()).to.equal(true);
  });
  it('DoublyLinkedList test for set()', () => {
    expect(doublyLinkedListTest.testSet()).to.equal(true);
  });
  it('DoublyLinkedList failed test for remove()', () => {
    expect(doublyLinkedListTest.testRemove()).to.equal(true);
  });
});

describe('Stack test', () => {
  it('Stack test for push()', () => {
    expect(stackTest.testPush()).to.equal(true);
  });
  it('Stack test for peek()', () => {
    expect(stackTest.testPeek()).to.equal(true);
  });
  it('Stack test for pop()', () => {
    expect(stackTest.testPop()).to.equal(true);
  });
  it('Stack test for size()', () => {
    expect(stackTest.testSize()).to.equal(true);
  });
  it('Stack test for clear() and isEmpty()', () => {
    expect(stackTest.testIsEmptyAndClear()).to.equal(true);
  });
});

describe('Queue test', () => {
  it('Queue test for enqueue()', () => {
    expect(queueTest.testEnqueue()).to.equal(true);
  });
  it('Queue test for dequeue()', () => {
    expect(queueTest.testDequeue()).to.equal(true);
  });
  it('Queue test for peek()', () => {
    expect(queueTest.testPeek()).to.equal(true);
  });
  it('Queue test for size()', () => {
    expect(queueTest.testSize()).to.equal(true);
  });
  it('Queue test for clear() and isEmpty()', () => {
    expect(queueTest.testIsEmptyAndClear()).to.equal(true);
  });
});

describe('BinarySearchTree - Inorder Traversal test', () => {
  it('BinarySearch tree test to give sorted list', () => {
    expect(binarySearchTreeTest()).to.equal(true);
  });
});

// Example for running algorithm test - note the 'only' attribute on `it`
describe('Bubble sort test', () => {
  it.only('Bubble sort test to give sorted list', () => {
    expect(bubbleSortTest()).to.equal(true);
  });
});

describe('Insertion sort test', () => {
  it('Insertion sort test to give sorted list', () => {
    expect(insertionSortTest()).to.equal(true);
  });
});

describe('Selection sort test', () => {
  it('Selection sort test to give sorted list', () => {
    expect(selectionSortTest()).to.equal(true);
  });
});

describe('Merge sort test', () => {
  it('Merge sort test to give sorted list', () => {
    expect(mergeSortTest()).to.equal(true);
  });
});

describe('Factorial test', () => {
  it('Factorial test failed', () => {
    expect(factorialTest()).to.equal(true);
  });
});

describe('Combinations test', () => {
  it('Combinations test failed', () => {
    expect(combinationsTest()).to.equal(true);
  });
});
