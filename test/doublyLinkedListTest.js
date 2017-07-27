const DoublyLinkedList = require('../src/dataStructures/doublyLinkedList');

class doublyLinkedListTest {
  static testAddAndGet() {
    const array = [];
    const doublyLinkedList = new DoublyLinkedList();
    const randomSize = Math.floor((Math.random() * 10) + 1);
    // Add a random number of randomly generated numbers
    let addElement;
    for (let i = 0; i < randomSize; i += 1) {
      addElement = Math.floor((Math.random() * 10) + 1);
      doublyLinkedList.add(addElement, null);
      array.push(addElement);
    }
    // Randomly request 3 elements from the list
    for (let i = 0; i < 3; i += 1) {
      if (i < randomSize - 1) {
        const doublyLinkedListValue = doublyLinkedList.get(i);
        const arrayValue = array[i];
        console.log(`doublyLinkedList value: ${doublyLinkedListValue}`);
        console.log(`doublyLinkedList value: ${arrayValue}`);
        if (doublyLinkedListValue !== arrayValue) return false;
      }
    }
    return true;
  }

  static testSpecificAddAndGet() {
    const array = [];
    const doublyLinkedList = new DoublyLinkedList();
    const randomSize = Math.floor((Math.random() * 10) + 3);
    // Add a random number of randomly generated numbers
    let addElement;
    for (let i = 0; i < randomSize; i += 1) {
      addElement = Math.floor((Math.random() * 10) + 1);
      doublyLinkedList.add(addElement, null);
      array.push(addElement);
    }

    let arrayString = 'Array before add: ';
    let dllString = 'DoublyLinkedList before add: ';
    for (let i = 0; i < randomSize; i += 1) {
      arrayString += `${array[i]} `;
      dllString += `${doublyLinkedList.get(i)} `;
    }
    console.log(arrayString);
    console.log(dllString);

    let addString = 'Elements to add in position 2 and 3: ';
    // Add random elements in position 2 and 3
    for (let i = 2; i < 4; i += 1) {
      addElement = Math.floor((Math.random() * 10) + 1);
      array.splice(i, 0, addElement);
      doublyLinkedList.add(addElement, i);
      addString += `${addElement} `;
    }
    console.log(addString);

    arrayString = 'Array after add: ';
    dllString = 'DoublyLinkedList after add: ';
    for (let i = 0; i < randomSize + 2; i += 1) {
      arrayString += `${array[i]} `;
      dllString += `${doublyLinkedList.get(i)} `;
    }
    console.log(arrayString);
    console.log(dllString);

    // Check correct length and correct values
    if ((array.length === (randomSize + 2)) || (doublyLinkedList.length() === (randomSize + 2))) {
      for (let i = 0; i < randomSize + 2; i += 1) {
        if (array[i] !== doublyLinkedList.get(i)) return false;
      }
      return true;
    }
    return false;
  }

  static testSet() {
    const array = [];
    const doublyLinkedList = new DoublyLinkedList();
    let addElement;
    // Add 11 random elements into the DoublyLinkedList
    for (let i = 0; i < 11; i += 1) {
      addElement = Math.floor((Math.random() * 10) + 1);
      doublyLinkedList.add(addElement, null);
      array.push(addElement);
    }
    // Randomly set 3 elements
    for (let i = 0; i < 3; i += 1) {
      const randomElement = Math.floor((Math.random() * 10) + 1);
      const randomIndex = Math.floor((Math.random() * 10) + 1);

      array[randomIndex] = randomElement;
      doublyLinkedList.set(randomIndex, randomElement);

      const doublyLinkedListElement = doublyLinkedList.get(randomIndex);
      const arrayElement = array[randomIndex];

      console.log(`doublyLinkedList value at index ${randomIndex}: ${doublyLinkedListElement} with reassign ${randomElement}`);
      console.log(`Array value at index ${randomIndex}: ${arrayElement} with reassign ${randomElement}`);
      if (arrayElement !== doublyLinkedListElement) return false;
    }

    return true;
  }

  static testRemove() {
    const array = [];
    const doublyLinkedList = new DoublyLinkedList();
    const randomSize = Math.floor((Math.random() * 10) + 3);
    let randomElement;
    // Add a random number of elements
    for (let i = 0; i < randomSize; i += 1) {
      randomElement = Math.floor((Math.random() * 10) + 1);
      array.push(randomElement);
      doublyLinkedList.add(randomElement, null);
    }

    let initialList = 'Initial list: ';
    for (let i = 0; i < randomSize; i += 1) {
      initialList += `${array[i].toString()} `;
    }
    console.log(initialList);

    // Randomly remove 2 elements
    for (let i = 0; i < 2; i += 1) {
      let randomRemoveIndex = -1;
      while ((randomRemoveIndex < 0) || (randomRemoveIndex > doublyLinkedList.length() - 1)) {
        randomRemoveIndex = Math.floor((Math.random() * 10) + 1);
      }

      console.log(`Remove index: ${randomRemoveIndex}`);
      array.splice(randomRemoveIndex, 1);
      doublyLinkedList.remove(randomRemoveIndex);
    }

    let arrayString = 'Array after remove: ';
    let dllString = 'doublyLinkedList after remove: ';
    for (let i = 0; i < randomSize - 2; i += 1) {
      arrayString += `${array[i]} `;
      dllString += `${doublyLinkedList.get(i)} `;
    }
    console.log(arrayString);
    console.log(dllString);

    // Check correct length and correct values
    if ((array.length === (randomSize - 2)) || (doublyLinkedList.length() === (randomSize - 2))) {
      for (let i = 0; i < randomSize - 2; i += 1) {
        if (array[i] !== doublyLinkedList.get(i)) return false;
      }
      return true;
    }
    return false;
  }
}

module.exports = doublyLinkedListTest;
