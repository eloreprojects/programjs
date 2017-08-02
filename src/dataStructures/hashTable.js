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
    if (!Object.prototype.hasOwnProperty.call(this.values, hash)) {
      this.values[hash] = {};
    }
    if (!Object.prototype.hasOwnProperty.call(this.values[hash], key)) {
      this.numberOfValues += 1;
    }
    this.values[hash][key] = value;
  }

  remove(key) {
    const hash = HashTable.calculateHash(key, this.size);
    if ((Object.prototype.hasOwnProperty.call(this.values, hash))
      && (Object.prototype.hasOwnProperty.call(this.values[hash], key))) {
      delete this.values[hash][key];
      this.numberOfValues -= 1;
    }
  }

  search(key) {
    const hash = HashTable.calculateHash(key, this.size);
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
    Object.keys(this.values).forEach((value) => {
      if (Object.prototype.hasOwnProperty.call(this.values, value)) {
        Object.keys(this.values[value]).forEach((key) => {
          if (Object.prototype.hasOwnProperty.call(this.values[value], key)) {
            string += `${this.values[value][key]} `;
          }
        });
      }
    });
    return string.trim();
  }

  print() {
    console.log(this.toString());
  }
};
