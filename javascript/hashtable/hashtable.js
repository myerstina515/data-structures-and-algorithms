'use strict';
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }
  add(value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
    node.next = null;
  }
}

class HashMap{
  constructor(size){
    this.map = new Array(size);
    this.size = size;
  }

  // turn the key into an array of characters that make up a string
  // .reduce to add the charCodeAt(0) + totalSoFar(accumulator)
  // multiplaly it by 599
  // then get the remainder when you divide the size

  hash(key){
    return key.split('').reduce((answerSoFar, value) => {
      return answerSoFar + value.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  // need a method that will allow me to put something
  //into my HashMap
  set(key, value){
    // 1. get my hash
    const hash = this.hash(key);
    // 2. make my entry
    const entry = {[key]:value};
    // 3. set the entry to the hash value in the map
    // 3.1 check to see if there's a hash there already. If not, I need to put a new linked list in there.
    if(!this.map[hash]){ this.map[hash] = new LinkedList(); }
    // 3.2 add the entry
    this.map[hash].add( entry );
  }

  // need something that will take in a key and retrieve the value from the table.
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

  // check to see if the table contains the key. Return t/f
  contains(key){
    const hash = this.hash(key);
    if(!this.map[hash]){
      return false;
    } else {
      return true;
    }
  }
}

module.exports = {HashMap, Node, LinkedList};
