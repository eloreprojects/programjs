const programjs = require('../src/index');
const Stack = require('../src/data_structures/stack');


// Test Bubble Sort
// To do: generate array of random numbers and then test incremental values with loop
let array = [6, 4, 7, 3, 2];

console.log("Initial Array: ", array);
const sorted_array = programjs.algorithms.bubble_sort(array);
console.log("Sorted Array: ", sorted_array);

// Test Stack
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); // => 1 2 3
console.log('length is 3:', stack.length()); // => 3
console.log('peek is 3:', stack.peek()); // => 3
console.log('pop is 3:', stack.pop()); // => 3
stack.print(); // => 1 2
console.log('pop is 2:', stack.pop());  // => 2
console.log('length is 1:', stack.length()); // => 1
console.log('pop is 1:', stack.pop()); // => 1
stack.print(); // => ''
console.log('peek is undefined:', stack.peek()); // => undefined
console.log('pop is undefined:', stack.pop()); // => undefined