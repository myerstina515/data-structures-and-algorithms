'use strict';

const {Node, BinaryTree, BinarySearchTree} = require ('../tree');

describe('Binary Trees', () => {
  it('Can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    // console.log(tree.root);
    expect(tree.root).toEqual(null);
  });
  it('Can successfully instantiate a tree with a single root node', () => {
    const node = new Node(7);
    const tree = new BinaryTree(node);
    expect(tree.root.value).toEqual(7);
  });
  it('Can successfully add a left child and right child to a single root node', () => {
    const node = new Node(3);
    const tree = new BinarySearchTree(node);
    tree.add(2);
    tree.add(7);
    expect(tree.root.value).toEqual(3);
    expect(tree.root.right.value).toEqual(7);
    expect(tree.root.left.value).toEqual(2);
  });
  it('Can successfully return a collection from a preorder traversal', () => {
    const node = new Node(12);
    const tree = new BinarySearchTree(node);
    tree.add(20);
    tree.add(8);
    tree.add(15);
    tree.add(2);
    expect(tree.preOrder()).toEqual([12, 8, 2, 20, 15]);
  });
  it('Can successfully return a collection from an inorder traversal', () => {
    let node = new Node(5);
    let tree = new BinarySearchTree(node);
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    tree.add(6);
    tree.add(7);
    expect(tree.inOrder()).toEqual([1,2,3,4,5,6,7]);
  });
  it('Can successfully return a collection from a postorder traversal', () => {
    let node = new Node(5);
    let tree = new BinarySearchTree(node);
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(7);
    tree.add(8);
    expect(tree.postOrder()).toEqual([3, 2, 1, 8, 7, 5]);
  });
  it('Finds the highest node value and returns it', () => {
    let node = new Node(6);
    let tree = new BinarySearchTree(node);
    tree.add(13);
    tree.add(2);
    tree.add(74);
    tree.add(1);
    tree.add(56);
    tree.add(404);
    // console.log('this is my tree', tree.findMaximumValue());
    expect(tree.findMaximumValue()).toEqual(404);
  });
  it('Returns an array of the breadth-first BinaryTree', () => {
    let node = new Node(6);
    let tree = new BinarySearchTree(node);
    tree.add(3);
    tree.add(8);
    tree.add(2);
    tree.add(5);
    tree.add(1);
    console.log('this is my tree', tree.breadthFirst());
    expect(tree.breadthFirst()).toEqual([6,3,8,2,5,1]);
  });
});

