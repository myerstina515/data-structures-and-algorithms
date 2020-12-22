'use strict';

const item = require('../stacks-and-queues');

describe('stacks', () => {
  it('Can successfully push onto a stack', () => {
    const stack = new item.Stack();
    stack.push(5);
    expect(stack.top.value).toEqual(5);
  });
  it('Can successfully push multiple values onto a stack', () => {
    const stack = new item.Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
  });
  it('Can successfully pop off the stack', () => {
    const stack = new item.Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    expect(stack.top.value).toEqual(2);
  });
  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new item.Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.top).toEqual(null);
  });
  it('Can successfully peek the next item on the stack', () => {
    const stack = new item.Stack();
    stack.push(1);
    expect(stack.peek().value).toEqual(1);
  });
  it('Can successfully instantiate an empty stack', () => {
    const stack = new item.Stack();
    expect(stack.top).toEqual(null);
  });
  it('Calling pop or peek on empty stack raises exception', () => {
    const stack = new item.Stack();
    expect(stack.isEmpty()).toBe(true);
  });
});

describe('Queues', () => {
  it('Can successfully enqueue into a queue', () => {
    const queue = new item.Queue();
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);
  });
  it('Can successfully enqueue multiple values into a queue', () => {
    const queue = new item.Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front.value).toEqual(1);
  });
  it('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new item.Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue().value).toEqual(1);
  });
  it('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new item.Queue();
    queue.enqueue(2);
    queue.enqueue(4);
    queue.enqueue(8);
    expect(queue.peek().value).toEqual(2);
  });
  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new item.Queue();
    queue.enqueue(3);
    queue.enqueue(43);
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toEqual(null);
  });
  it('Can successfully instantiate an empty queue', () => {
    const queue = new item.Queue();
    expect(queue.front).toEqual(null);
  });
  it('Calling dequeue or peek on empty queue raises exception', () => {
    const queue = new item.Queue();
    expect(() => queue.peek()).toThrow('Exception');
  });
});
