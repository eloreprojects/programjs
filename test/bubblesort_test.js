const bubble_sort = require('../src/algorithms/bubble_sort');

// Test Bubble Sort
// To do: generate array of random numbers and then test incremental values with loop

module.exports = () => {
    let array = [6, 4, 7, 3, 2];

    console.log("Initial Array: ", array);
    const sorted_array = bubble_sort(array);
    console.log("Sorted Array: ", sorted_array);
}