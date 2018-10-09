const mergeSort = require('../src/algorithms/mergeSort');

// Test Merge Sort
module.exports = () => {
  const array = [];
  const randomSize = Math.floor((Math.random() * 20) + 1);
  // Generate an array containing a random number of random numbers from 1 to 20
  for (let i = 0; i < randomSize; i += 1) {
    array.push(Math.floor((Math.random() * 20) + 1));
  }
  console.log(`Initial Array: ${array.join(' ')}`);

  // Sort it
  const sortedArray = mergeSort(array);
  console.log(`Sorted Array: ${sortedArray.join(' ')}`);

  // Check size of sorted array is same as original
  if (sortedArray.length !== array.length) return false;

  // Make sure each value is incremental, and fail test if not
  for (let i = 0; i < randomSize - 1; i += 1) {
    if (sortedArray[i] > sortedArray[i + 1]) {
      return false;
    }
  }

  return true;
};
