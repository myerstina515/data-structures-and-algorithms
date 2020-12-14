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
    //   nodeValues += 'node';
    } else {
      const node = new Node(value);
      node.next = this.head;
      this.head = node;
    //   nodeValues =+ 'node';
    }
  }

  //   append(value){
  //     const node = new Node(value);
  //     let currentNode = this.head;
  //     while (currentNode.next !== null){
  //       currentNode = currentNode.next;
  //     }
  //     currentNode.next = node;
  //     nodeValues += `-> ${node}`;
  //   }

  includes(value){
    let current = this.head;
    if(current.value === value) return true;
    current = this.head.next;
    if(current.value === value) return true;
    current = current.next;
    if(current.value === value) return true;
    else {return false;}
  }
  //   includes(searchValue) {
  //     let currentNode = this.head;
  //     let result;
  //     while(currentNode.value !== searchValue){
  //       currentNode = currentNode.next;
  //       if(currentNode.next === null){
  //         return result = false;
  //       }
  //     }
  //     if (currentNode.value === searchValue){
  //       return result = true;
  //     }
  //     return result;
  //   }

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
}

module.exports = LinkedList;
