const Stack = require('../src/dataStructures/stack');

// Stack test
class stackTest {
  // Temporary stack test
  static overall() {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.print(); // => 1 2 3
    console.log('length is 3:', stack.length()); // => 3
    console.log('peek is 3:', stack.peek()); // => 3
    console.log('pop is 3:', stack.pop()); // => 3
    stack.print(); // => 1 2
    console.log('pop is 2:', stack.pop()); // => 2
    console.log('length is 1:', stack.length()); // => 1
    console.log('pop is 1:', stack.pop()); // => 1
    stack.print(); // => ''
    console.log('peek is undefined:', stack.peek()); // => undefined
    console.log('pop is undefined:', stack.pop()); // => undefined

    return true;
  }
}

module.exports = stackTest;
