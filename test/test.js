const expect = require('chai').expect;

const singlyLinkedListTest = require('./singlyLinkedListTest');
const stackTest = require('./stackTest');
const queueTest = require('./queueTest');
const binarySearchTreeTest = require('./binarySearchTreeTest');

const bubbleSortTest = require('./bubbleSortTest');
const insertionSortTest = require('./insertionSortTest');
const selectionSortTest = require('./selectionSortTest');
const mergeSortTest = require('./mergeSortTest');

// Test SinglyLinkedList
describe('#singlyLinkedListAddAndGetTest', () => {
  it('should pass testAddAndGet in singlyLinkedListTest', () => {
    expect(singlyLinkedListTest.testAddAndGet()).to.equal(true);
  });
});

describe('#singlyLinkedListSetTest', () => {
  it('should pass testSet in singlyLinkedListTest', () => {
    expect(singlyLinkedListTest.testSet()).to.equal(true);
  });
});

describe('#singlyLinkedListRemoveTest', () => {
  it('should pass testRemove in singlyLinkedListTest', () => {
    expect(singlyLinkedListTest.testRemove()).to.equal(true);
  });
});

// Test Stack
describe('#stackPushTest', () => {
  it('should pass testPush in stackTest', () => {
    expect(stackTest.testPush()).to.equal(true);
  });
});

describe('#stackPeekTest', () => {
  it('should pass testPeek in stackTest', () => {
    expect(stackTest.testPeek()).to.equal(true);
  });
});

describe('#stackPopTest', () => {
  it('should pass testPop in stackTest', () => {
    expect(stackTest.testPop()).to.equal(true);
  });
});

describe('#stackSizeTest', () => {
  it('should pass testSize in stackTest', () => {
    expect(stackTest.testSize()).to.equal(true);
  });
});

describe('#stackIsEmptyAndClearTest', () => {
  it('should pass testIsEmptyAndClear in stackTest', () => {
    expect(stackTest.testIsEmptyAndClear()).to.equal(true);
  });
});

// Test Queue
describe('#queueEnqueueTest', () => {
  it('should pass testEnqueue in queueTest', () => {
    expect(queueTest.testEnqueue()).to.equal(true);
  });
});

describe('#queueDequeueTest', () => {
  it('should pass testEnqueue in queueTest', () => {
    expect(queueTest.testDequeue()).to.equal(true);
  });
});

describe('#queuePeekTest', () => {
  it('should pass testPeek in queueTest', () => {
    expect(queueTest.testPeek()).to.equal(true);
  });
});

describe('#queueSizeTest', () => {
  it('should pass testSize in queueTest', () => {
    expect(queueTest.testSize()).to.equal(true);
  });
});

describe('#queueIsEmptyAndClearTest', () => {
  it('should pass testIsEmptyAndClear in queueTest', () => {
    expect(queueTest.testIsEmptyAndClear()).to.equal(true);
  });
});

// Test Binary Search Tree
describe('#binarySearchTree - Inorder Traversal', () => {
  it('Should give a sorted list', () => {
    expect(binarySearchTreeTest()).to.equal(true);
  });
});

// Test Bubble Sort
describe('#bubbleSortTest', () => {
  it('should pass bubbleSortTest', () => {
    expect(bubbleSortTest()).to.equal(true);
  });
});

// Test Insertion Sort
describe('#insertionSortTest', () => {
  it('should pass insertionSortTest', () => {
    expect(insertionSortTest()).to.equal(true);
  });
});

// Test Selection Sort
describe('#selectionSortTest', () => {
  it('should pass selectionSortTest', () => {
    expect(selectionSortTest()).to.equal(true);
  });
});

// Test Merge Sort
describe('#mergeSortTest', () => {
  it('should pass mergeSortTest', () => {
    expect(mergeSortTest()).to.equal(true);
  });
});
