'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }
  push(value){//takes any value as an argument and adds a new node
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
  }
  pop(){// does not take any argument, removes the node from the top of the stack, and returns the node’s value.
    if (!this.top) return false;
    const tempNode = this.top;
    this.top = tempNode.next;
    return tempNode.value;
  }
  peek(){// does not take an argument and returns the value of the node located on top of the stack, 
    if(!this.top) throw new Error(`Exception`);
    return this.top;
  }
  isEmpty(){//takes no argument, and returns a boolean
    if(!this.top) return true;
  }
}

class Queue{
  constructor(){
    this.front = null;
    this.end = null;
  }
  enqueue(value){//takes any value as an argument and adds a new node
    let newNode = new Node (value);
    let currentNode = this.front;
    if(!currentNode){
      this.front = newNode;
    } else {
      while(currentNode.next){
        currentNode = currentNode.next;
        currentNode.next = newNode;
      }
    }
  }
  dequeue(){//does not take any argument, removes the node from the front of the queue
    if(!this.front) return false;
    const value = this.front;
    this.front = value.next;
    return value;
  }
  peek(){//does not take an argument and returns the value of the node located in the front of the queue,
    if (!this.front)throw new Error('Exception');
    return this.front;
  }
  isEmpty(){//takes no argument, and returns a boolean
    if(!this.front) return true;
  }

}


module.exports = {Node, Stack, Queue};

