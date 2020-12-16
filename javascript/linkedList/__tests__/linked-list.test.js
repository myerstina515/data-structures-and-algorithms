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
describe('append', () => {
  it ('should add a value to the end of the linked list', () => {
    const list = new LL();
    list.insert('one');
    list.insert('two');
    list.insert('three');
    list.append('four');
    expect(list.toString()).toEqual('{three} -> {two} -> {one} -> {four} -> NULL');
  });
});
describe('append multiple', () => {
  it ('should add multiple values to the end of the linked list', () => {
    const list = new LL();
    list.insert('one');
    list.insert('two');
    list.append('three');
    list.append('four');
    expect(list.toString()).toEqual('{two} -> {one} -> {three} -> {four} -> NULL');
  });
});
describe('insert before', () => {
  it ('should add a node before the specified node', () => {
    const list = new LL();
    list.insert('one');
    list.insert('two');
    list.insertBefore('one', 'seven');
    expect(list.toString()).toEqual('{two} -> {seven} -> {one} -> NULL');
  });
});
describe('insert before first', () => {
  it('should insert a node before the first node', () => {
    const list = new LL();
    list.insert('one');
    list.insert('two');
    list.insert('three');
    list.insert('nine');
    expect(list.toString()).toEqual('{nine} -> {three} -> {two} -> {one} -> NULL');
  });
});
describe('insert after', () => {
  it ('should add a node after the specified node', () => {
    const list = new LL();
    list.insert('one');
    list.insert('two');
    list.insertAfter('two', 'five');
    expect(list.toString()).toEqual('{two} -> {five} -> {one} -> NULL');
  });
});
describe('insert after end', () => {
  it('should insert a node after the end of the last node', () => {
    const list = new LL();
    list.insert('one');
    list.insert('two');
    list.insertAfter('one', 'five');
    expect(list.toString()).toEqual('{two} -> {one} -> {five} -> NULL');
  });
});
// describe('happy path', () => {
//   it('should have k in the middle of the linked list', () => {
//     const list = new LL();
//     list.insert('one');
//     list.insert('two');
//     list.insert('three');
//     list.insert('four');
//     list.kthFromEnd(1);
//     expect(list.toString()).toEqual('two');
//   });
// });
describe('k > length', () => {
  it('should have k as larger than the length of the list', () => {
    const list = new LL();
    list.insert('three');
    list.insert('two');
    list.insert('one');
    list.kthFromEnd(4);
    expect(list.value).toEqual(undefined);
  });
});
describe('k = length', () => {
  it('should have k as equal to the length of the list', () => {
    const list = new LL();
    list.insert(3);
    list.insert(2);
    list.insert(1);
    list.kthFromEnd(2);
    expect(list.value).toEqual(undefined);
  });
});
// describe('list one node long', () => {
//   it('should have a LL length of one', () => {
//     const list = new LL();
//     list.insert('hello');
//     list.kthFromEnd(0);
//     expect(list.toString()).toEqual('{hello} -> NULL');
//   });
// });
