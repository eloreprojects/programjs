const SinglyLinkedList = require('../src/dataStructures/singlyLinkedList');

class singlyLinkedListTest {
  static testAddAndGet() {
    const array = [];
    const singlyLinkedList = new SinglyLinkedList();
    const randomSize = Math.floor((Math.random() * 10) + 1);
    // Add a random number of randomly generated numbers
    let addElement;
    for (let i = 0; i < randomSize; i += 1) {
      addElement = Math.floor((Math.random() * 10) + 1);
      singlyLinkedList.add(addElement);
      array.push(addElement);
    }
    // Randomly request 3 elements from the list
    for (let i = 0; i < 3; i += 1) {
      if (i < randomSize - 1) {
        const singlyLinkedListValue = singlyLinkedList.get(i);
        const arrayValue = array[i];
        console.log(`SinglyLinkedList value: ${singlyLinkedListValue}`);
        console.log(`SinglyLinkedList value: ${arrayValue}`);
        if (singlyLinkedListValue !== arrayValue) return false;
      }
    }
    return true;
  }

  static testSet() {
    const array = [];
    const singlyLinkedList = new SinglyLinkedList();
    let addElement;
    // Add 11 random elements into the SinglyLinkedList
    for (let i = 0; i < 11; i += 1) {
      addElement = Math.floor((Math.random() * 10) + 1);
      singlyLinkedList.add(addElement);
      array.push(addElement);
    }
    // Randomly set 3 elements
    for (let i = 0; i < 3; i += 1) {
      const randomElement = Math.floor((Math.random() * 10) + 1);
      const randomIndex = Math.floor((Math.random() * 10) + 1);

      array[randomIndex] = randomElement;
      singlyLinkedList.set(randomIndex, randomElement);

      const singlyLinkedListElement = singlyLinkedList.get(randomIndex);
      const arrayElement = array[randomIndex];

      console.log(`SinglyLinkedList value at index ${randomIndex}: ${singlyLinkedListElement} with reassign ${randomElement}`);
      console.log(`Array value at index ${randomIndex}: ${arrayElement} with reassign ${randomElement}`);
      if (arrayElement !== singlyLinkedListElement) return false;
    }

    return true;
  }
}

module.exports = singlyLinkedListTest;
