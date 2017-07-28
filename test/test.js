const expect = require('chai').expect;

const singlyLinkedListTest = require('./singlyLinkedListTest');
const insertionSortTest = require('./insertionSortTest');


// Data Structure Test Example
describe('SinglyLinkedList add() and get() test', () => {
  it('SinglyLinkedList tester for add() and get()', () => {
    expect(singlyLinkedListTest.testAddAndGet()).to.equal(true);
  });
});

// Algorithm Test Example
describe('Insertion sort test', () => {
  it('Insertion sort tested to give sorted list', () => {
    expect(insertionSortTest()).to.equal(true);
  });
});
