const expect = require('chai').expect;

const stackTest = require('./stackTest');
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

// Test Bubble Sort
describe('#bubbleSortTest', () => {
  it('should pass test in bubbleSortTest', () => {
    expect(bubbleSortTest.overall()).to.equal(true);
  });
});

// Test Insertion Sort
describe('#insertionSortTest', () => {
  it('should pass test in insertionSortTest', () => {
    expect(insertionSortTest.overall()).to.equal(true);
  });
});
