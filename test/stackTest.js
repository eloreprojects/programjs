const Stack = require('../src/dataStructures/stack');

class stackTest {
  static testPush() {
    const array = [];
    const stack = new Stack();
    // Add 5 randomly generated numbers
    let randomNumber;
    for (let i = 0; i < 5; i += 1) {
      randomNumber = Math.floor((Math.random() * 10) + 1);
      array.push(randomNumber);
      stack.push(randomNumber);
    }
    const arrayString = array.join(' ');
    const stackString = stack.toString();
    console.log(`Array output: ${arrayString}`);
    console.log(`Stack output: ${stackString}`);
    return (stackString === arrayString);
  }

  static testPeek() {
    const array = [];
    const stack = new Stack();
    // Add 2 randomly generated numbers
    let randomNumber;
    for (let i = 0; i < 2; i += 1) {
      randomNumber = Math.floor((Math.random() * 10) + 1);
      array.push(randomNumber);
      stack.push(randomNumber);
    }
    const arrayPeek = array[1];
    const stackPeek = stack.peek();
    console.log(`Array peek: ${arrayPeek}`);
    console.log(`Stack peek: ${stackPeek}`);
    return (arrayPeek === stackPeek);
  }

  static testPop() {
    const array = [];
    const stack = new Stack();
    // Add 3 randomly generated numbers
    let randomNumber;
    for (let i = 0; i < 3; i += 1) {
      randomNumber = Math.floor((Math.random() * 10) + 1);
      array.push(randomNumber);
      stack.push(randomNumber);
    }
    const arrayFirstPop = array.pop();
    const arraySecondPop = array.pop();
    const stackFirstPop = stack.pop();
    const stackSecondPop = stack.pop();
    console.log(`Array first and second pop: ${arrayFirstPop} ${arraySecondPop}`);
    console.log(`Stack first and second pop: ${stackFirstPop} ${stackSecondPop}`);
    return ((arrayFirstPop === stackFirstPop) && (arraySecondPop === stackSecondPop));
  }

  static testSize() {
    const stack = new Stack();
    const randomSize = Math.floor((Math.random() * 10) + 1);
    // Add a random number of randomly generated numbers
    for (let i = 0; i < randomSize; i += 1) {
      stack.push(Math.floor((Math.random() * 10) + 1));
    }
    console.log(`Stack size: ${stack.size()}`);
    return (randomSize === stack.size());
  }

  static testIsEmptyAndClear() {
    const stack = new Stack();
    // Add 4 randomly generated numbers
    for (let i = 0; i < 4; i += 1) {
      stack.push(Math.floor((Math.random() * 10) + 1));
    }
    if (stack.isEmpty()) return false;
    stack.clear();
    return (stack.isEmpty());
  }
}

module.exports = stackTest;
