// BubbleSort Implementation
// Worst case is O(n2)
module.exports = (array) => {
  for(let i = 0; i < array.length; i++) {
    for(let j = 1; j < array.length; j++) {
        // if previous is larger than current
        if(array[j - 1] > array[j]) {
            // swap elements
            [array[j - 1], array[j]] = [array[j], array[j - 1]];
      }
    }
  }
  return array;
};