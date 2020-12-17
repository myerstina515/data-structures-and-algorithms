'use strict';

const Node = require('./node');

// let nodeValues = '';

class LinkedList {
  constructor(){
    this.head = null;
  }

  insert(value){
    if (this.head === null){
      const node = new Node(value);
      this.head = node;
    } else {
      const node = new Node(value);
      node.next = this.head;
      this.head = node;
    }
  }

  append(value){
    const node = new Node(value);
    let currentNode = this.head;
    while (currentNode.next !== null){
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }

  includes(value){
    let current = this.head;
    if(current.value === value) return true;
    current = this.head.next;
    if(current.value === value) return true;
    current = current.next;
    if(current.value === value) return true;
    else {return false;}
  }

  toString(){
    let currentNode = this.head;
    let outputString = [];
    while (currentNode !== null){
      outputString.push(`{${currentNode.value}}`);
      currentNode = currentNode.next;
    }
    outputString.push('NULL');
    return outputString.join(' -> ');
  }


  insertBefore(searchValue, value){
    let currentNode = this.head;
    while(currentNode.next !== null){
      if(currentNode.next.value === searchValue){
        let temp = new Node();
        temp.value = value;
        temp.next = currentNode.next;
        if(currentNode.next === this.next)this.next = temp;
        currentNode.next = temp;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  insertAfter(searchValue, value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === searchValue) {
        let temp = new Node();
        temp.value = value;
        temp.next = currentNode.next;
        if (currentNode === this.next)this.next = temp;
        currentNode.next = temp;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  kthFromEnd(k){
    let length = 0;
    let currentNode = this.head;
    while(currentNode !== null){
      // console.log(currentNode);
      currentNode = currentNode.next;
      length ++;
      if (currentNode.next === null){
        return length;
      }
    }
    let newLength = 0;
    let selectedNodeLength = length - k;
    while(currentNode){
      currentNode = currentNode.next;
      newLength++;
      if(newLength === selectedNodeLength){
        return currentNode.value;
      }
    }
  }
}


module.exports = LinkedList;
