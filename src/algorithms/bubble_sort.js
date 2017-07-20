// Bubble Sort Implementation of O(n^2)

module.exports = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
        if (array[j - 1] > array[j]) {
          [array[j - 1], array[j]] = [array[j], array[j - 1]];
      }
    }
  }
  
  return array;
};