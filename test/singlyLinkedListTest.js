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
}

module.exports = singlyLinkedListTest;
