// Bubble Sort Implementation of O(n^2)

module.exports = (array) => {
  const sortedArray = array;
  for (let i = 0; i < sortedArray.length; i += 1) {
    for (let j = 1; j < sortedArray.length; j += 1) {
      if (sortedArray[j - 1] > sortedArray[j]) {
        [sortedArray[j - 1], sortedArray[j]] = [sortedArray[j], sortedArray[j - 1]];
      }
    }
  }

  return sortedArray;
};
