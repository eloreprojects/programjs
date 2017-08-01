const HashTable = require('../src/dataStructures/hashTable');

class hashTableTest {
  static testAddandSearchandLength() {
    // Create HashTable with 3 buckets
    const hashTable = new HashTable(3);
    hashTable.add('first', 1);
    hashTable.add('second', 2);
    hashTable.add('third', 3);
    hashTable.add('fourth', 4);
    hashTable.add('fifth', 5);

    console.log(`HashTable contents: ${hashTable.toString()}`);
    console.log(`HashTable length: ${hashTable.length()}`);

    if (hashTable.length() !== 5) return false;

    // Search for 'second' and 'third'
    const searchSecond = hashTable.search('second');
    const searchThird = hashTable.search('third');

    console.log(`Search for 'second': ${searchSecond}`);
    console.log(`Search for 'third': ${searchThird}`);

    return (searchSecond === 2 && searchThird === 3);
  }

  static testRemove() {}
}

// hashTable.remove('fourth');
module.exports = hashTableTest;
