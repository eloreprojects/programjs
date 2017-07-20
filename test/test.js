const expect = require('chai').expect;

const stackTest = require('./stackTest');
const bubbleSortTest = require('./bubbleSortTest');

describe('#stackTest', () => {
  it('should pass test in stackTest', () => {
    expect(stackTest.overall()).to.equal(true);
  });
});

describe('#bubbleSortTest', () => {
  it('should pass test in bubbleSortTest', () => {
    expect(bubbleSortTest.overall()).to.equal(true);
  });
});
