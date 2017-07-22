const insertionSort = require('../src/algorithms/insertionSort');

// Test Insertion Sort
module.exports = () => {
  const array = [];
  const randomSize = Math.floor((Math.random() * 20) + 1);
  // Generate an array containing a random number of random numbers from 1 to 20
  for (let i = 0; i < randomSize; i += 1) {
    array.push(Math.floor((Math.random() * 20) + 1));
  }
  console.log('Initial Array: ', array);

  // Sort it
  const sortedArray = insertionSort(array);
  console.log('Sorted Array: ', sortedArray);

  // Make sure each value is incremental, and fail test if not
  for (let i = 0; i < randomSize - 1; i += 1) {
    if (sortedArray[i] > sortedArray[i + 1]) {
      return false;
    }
  }

  return true;
};

