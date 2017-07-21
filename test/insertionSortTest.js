const insertionSort = require('../src/algorithms/insertionSort');

// Test Insertion Sort
class insertionSortTest {
  static overall() {
    const array = [];
    // Generate an array of 7 random numbers from 1 to 10
    for (let i = 0; i < 7; i += 1) {
      array.push(Math.floor((Math.random() * 10) + 1));
    }
    console.log('Initial Array: ', array);

    // Sort it
    const sortedArray = insertionSort(array);
    console.log('Sorted Array: ', sortedArray);

    // Make sure each value is incremental, and fail test if not
    for (let i = 0; i < 6; i += 1) {
      if (sortedArray[i] > sortedArray[i + 1]) {
        return false;
      }
    }

    return true;
  }
}

module.exports = insertionSortTest;
