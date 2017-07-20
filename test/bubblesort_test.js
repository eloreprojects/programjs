const bubble_sort = require('../src/algorithms/bubble_sort');

// Test Bubble Sort
// To do: generate array of random numbers and then test incremental values with loop
class BubbleSortTest {

    static overall() {
        var array = [];
        // Generate an array of 7 random numbers from 1 to 10
        for (var i = 0; i < 7; i++) {
            array.push(Math.floor((Math.random() * 10) + 1));
        }
        console.log("Initial Array: ", array);
        
        // Sort it
        const sorted_array = bubble_sort(array);
        console.log("Sorted Array: ", sorted_array);

        // Make sure each value is incremental, and fail test if not
        for (var i = 0; i < 6; i++) {
            if (sorted_array[i] > sorted_array[i+1]) {
                return false;
            }
        }

        return true;
    }
}

module.exports = BubbleSortTest;
