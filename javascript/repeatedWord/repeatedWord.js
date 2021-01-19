'use strict';

'use strict';
const obj = require('../hashtable/hashtable');
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    node.next = null;
  }
}
class HashMap {
  constructor(size) {
    this.map = new Array(size);
    this.size = size;
  }
  // turn the key into an array of characters that make up a string
  // .reduce to add the charCodeAt(0) + totalSoFar(acculumator)
  // multiply it by 599
  // then get the remainder when you divide by the size
  hash(key) {
    return (
      (key.split('').reduce((anwserSoFar, value) => {
        return anwserSoFar + value.charCodeAt(0);
      }, 0) *
        599) %
      this.size
    );
  }
  // need a method that will allow me to put something into my hashmap
  set(key, value) {
    // 1. get my hash
    const hash = this.hash(key);
    // 2. make value entry
    const entry = { [key]: value };
    // 3. set the entry to the hash value in the map
    // 3.1 check to see if there is a hash there already - if not, I need to put in a LL
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    // 3.2 add the entry
    this.map[hash].add(entry);
  }
  // get: takes in the key and returns the value from the table.
  get(key) {
    // first, I need to hash the key
    const hash = this.hash(key);
    // if there isn't a hash return null
    if (!this.map[hash]) return null;
    // make my hashed position (which is a linked list) equal to current
    let current = this.map[hash].head;
    // while current exists
    while (current) {
      if (current.value.hasOwnProperty(key)) {
        return current.value[key];
      }
      current = current.next;
    }
    return null;
    // look to see if the keys match
    // if they do, return the value
  }
  // contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
  contains(key) {
    const hash = this.hash(key);
    // if there isn't a hash return null
    if (!this.map[hash]) return null;
    // make my hashed position (which is a linked list) equal to current
    let current = this.map[hash].head;
    // while current exists
    while (current) {
      if (current.value.hasOwnProperty(key)) return true;
      current = current.next;
    }
    return false;
    // look to see if the keys match
    // if they do, return the value
  }
}
function repeatedWord(string){
  const arr = string.split(' ');
  const hash = new Map();
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (hash.get(arr[i]) === undefined) {
      hash.set(arr[i], true);
    } else {
      const value = hash.get(arr[i]);
      if (value) {
        hash.set(arr[i], !value);
      }
    }
  }
  hash.forEach((v, k) => {
    if (!v)
      result.push(k);
  });
  return result[0];
}

module.exports = repeatedWord;
