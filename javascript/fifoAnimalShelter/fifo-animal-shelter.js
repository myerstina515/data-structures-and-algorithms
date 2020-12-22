'use strict';
class animal {
  constructor() {
    this.type = type;
    this.next = null;
    let cat = { type: cat };
    let dog = { type: dog };
  }
}
class animalShelter {
  constructor(queue) {
    this.front = null;
    this.end = null;
  }
  enqueue(animal) {
    let otherAnimal = new Animal(animal);
    if (this.rear) { this.rear.next = otherAnimal; }
    if (!this.front) { this.front = this.rear; }
  }
  dequeue(pref) {
    if (!this.front || (!pref.type === cat || dog)) { throw new Error('exception'); }
    else {
      let tempAnimal = this.front;
      this.front = this.front.next;
      return tempAnimal;
    }
  }
}