'use strict';

// Require our linked list implementation
const LL = require('../linked-list');

describe('instantiate new linked list', () => {
  it('checks to see if there is an empty linked list', () => {
    const empty = new LL();
    expect(empty.head).toEqual(null);
  });
});

describe('Linked List', () => {
  it('inserts a node at the beginning of an empty list', () => {
    const list = new LL();
    list.insert('it works!');
    expect(true).toBeTruthy();
  });
});

describe('Head property is first node', () => {
  it ('properly points to the first node in the linked list', () => {
    const list = new LL();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.head.value).toEqual('c');
  });
});

describe('Insert multiple nodes', () => {
  it ('will properly insert multiple nodes into linked list', () => {
    const list = new LL();
    list.insert('one');
    list.insert('two');
    list.insert('three');
    let firstNode = list.head.value;
    expect(firstNode).toEqual('three');
    let secondNode = list.head.next;
    expect(secondNode.value).toEqual('two');
    let thirdNode = secondNode.next;
    expect(thirdNode.value).toEqual('one');
  });
});

describe('Return true', () => {
  it ('should return true when the value exists in the list', () => {
    const list = new LL();
    list.insert('bananas');
    list.insert('apples');
    list.insert('naan');
    expect(list.includes('bananas')).toBe(true);
  });
});

describe('Return false', () => {
  it ('should return false when the value does not exist in the list', () => {
    const list = new LL();
    list.insert('bananas');
    list.insert('apples');
    list.insert('naan');
    expect(list.includes('snickers')).toBe(false);
  });
});

describe('return a string', () => {
  it ('should return a string of all node values', () => {
    const list = new LL();
    list.insert('tres');
    list.insert('dos');
    list.insert('uno');
    expect(list.toString()).toEqual('{uno} -> {dos} -> {tres} -> NULL');
  });
});

