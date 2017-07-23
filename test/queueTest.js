const Queue = require('../src/dataStructures/queue');

class queueTest {
  static testEnqueue() {
    const array = [];
    const queue = new Queue();
    // Add 5 randomly generated numbers
    let randomNumber;
    for (let i = 0; i < 5; i += 1) {
      randomNumber = Math.floor((Math.random() * 10) + 1);
      array.push(randomNumber);
      queue.enqueue(randomNumber);
    }
    const arrayString = array.join(' ');
    const queueString = queue.toString();
    console.log(`Array output: ${arrayString}`);
    console.log(`Queue output: ${queueString}`);
    return (queueString === arrayString);
  }

  static testDequeue() {
    const array = [];
    const queue = new Queue();
    // Add 3 randomly generated numbers
    let randomNumber;
    for (let i = 0; i < 3; i += 1) {
      randomNumber = Math.floor((Math.random() * 10) + 1);
      array.push(randomNumber);
      queue.enqueue(randomNumber);
    }
    const arrayFirstDequeue = array.shift();
    const arraySecondDequeue = array.shift();
    const queueFirstDequeue = queue.dequeue();
    const queueSecondDequeue = queue.dequeue();
    console.log(`Array first and second dequeue: ${arrayFirstDequeue} ${arraySecondDequeue}`);
    console.log(`Queue first and second dequeue: ${queueFirstDequeue} ${queueSecondDequeue}`);
    return ((arrayFirstDequeue === queueFirstDequeue)
        && (arraySecondDequeue === queueSecondDequeue));
  }

  static testPeek() {
    const array = [];
    const queue = new Queue();
    // Add 2 randomly generated numbers
    let randomNumber;
    for (let i = 0; i < 2; i += 1) {
      randomNumber = Math.floor((Math.random() * 10) + 1);
      array.push(randomNumber);
      queue.enqueue(randomNumber);
    }
    const arrayPeek = array[0];
    const queuePeek = queue.peek();
    console.log(`Array peek: ${arrayPeek}`);
    console.log(`Queue peek: ${queuePeek}`);
    return (arrayPeek === queuePeek);
  }

  static testSize() {
    const queue = new Queue();
    const randomSize = Math.floor((Math.random() * 10) + 1);
    // Add a random number of randomly generated numbers
    for (let i = 0; i < randomSize; i += 1) {
      queue.enqueue(Math.floor((Math.random() * 10) + 1));
    }
    console.log(`Queue size: ${queue.size()}`);
    return (randomSize === queue.size());
  }

  static testIsEmptyAndClear() {
    const queue = new Queue();
    // Add 4 randomly generated numbers
    for (let i = 0; i < 4; i += 1) {
      queue.enqueue(Math.floor((Math.random() * 10) + 1));
    }
    if (queue.isEmpty()) return false;
    queue.clear();
    return (queue.isEmpty());
  }
}

module.exports = queueTest;
