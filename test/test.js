const expect = require('chai').expect;

const stackTest = require('./stackTest');
const queueTest = require('./queueTest');

const bubbleSortTest = require('./bubbleSortTest');
const insertionSortTest = require('./insertionSortTest');

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
