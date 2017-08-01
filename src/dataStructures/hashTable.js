/* eslint-disable no-bitwise */

/**
 * An implementation of a Hash Table in Javascript.
 */
module.exports = class HashTable {
  constructor(size) {
    this.values = {};
    this.numberOfValues = 0;
    this.size = size;
  }

  static calculateHash(key, max) {
    let hash = 0;
    const str = key.toString();
    for (let i = 0; i < str.length; i += 1) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash &= hash;
      hash = Math.abs(hash);
    }
    return hash % max;
  }

  add(key, value) {
    const hash = HashTable.calculateHash(key, this.size);
    console.log(hash);
    if (!Object.prototype.hasOwnProperty.call(this.values, hash)) {
      this.values[hash] = {};
    }
    if (!Object.prototype.hasOwnProperty.call(this.values[hash], key)) {
      this.numberOfValues += 1;
    }
    this.values[hash][key] = value;
    console.log(this.values[hash][key]);
  }

  remove(key) {
    const hash = HashTable.calculateHash(key);
    if ((Object.prototype.hasOwnProperty.call(this.values, hash))
      && (Object.prototype.hasOwnProperty.call(this.values[hash], key))) {
      delete this.values[hash][key];
      this.numberOfValues -= 1;
    }
  }

  search(key) {
    const hash = HashTable.calculateHash(key);
    if ((Object.prototype.hasOwnProperty.call(this.values, hash))
      && (Object.prototype.hasOwnProperty.call(this.values[hash], key))) {
      return this.values[hash][key];
    }
    return null;
  }

  length() {
    return this.numberOfValues;
  }

  toString() {
    let string = '';
    for (let value = 0; value < this.values.length; value += 1) {
      for (let key = 0; key < this.values[value].length; key += 1) {
        string += `${this.values[value][key]}`;
      }
    }
    return string.trim();
  }

  print() {
    console.log(this.toString());
  }
};
