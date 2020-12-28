'use strict';

const Tree = require('../tree');

describe('Binary Trees', () => {
  it('Can successfully instantiate an empty tree', () => {
    const tree = new Tree.BinaryTree();
    expect(tree.root.value).toEqual(null);
  });
  it('Can successfully instantiate a tree with a single root node', () => {
    const tree = new Tree.BinaryTree(7);
    expect(tree.root.value).toEqual(7);
  });
  it('Can successfully add a left child and right child to a single root node', () => {
    const tree = new Tree.BinarySearchTree(3);
    tree.add(2);
    tree.add(7);
    expect(tree.root.value).toEqual(3);
    expect(tree.root.rightChild.value).toEqual(7);
    expect(tree.root.leftChild.value).toEqual(2);
  });
  //   it('Can successfully return a collection from a preorder traversal', () => {
  //     let nodes = new Tree.Node((4), new Tree.Node(15), new Tree.Node(2));
  //     let tree = new Tree.BinaryTree(nodes);
  //     console.log(tree.preOrder(tree.value));
  //     expect(tree.preOrder(tree.root.value)).toEqual([4,15,2]);
  //   });
  it('Can successfully return a collection from an inorder traversal', () => {
    let tree = new Tree.BinarySearchTree(12);
    tree.add(2);
    tree.add(14);
    // console.log(tree.root.rightChild.value);
    let newTree = new Tree.BinaryTree([tree.root.value, tree.root.leftChild.value, tree.root.rightChild.value]);
    // console.log(newTree.root.value);
    expect(newTree.root.value).toEqual([12,2,14]);
  });
  //   it('Can successfully return a collection from a postorder traversal', () => {
  //     let nodes = new Tree.Node('I am G(root)!', new Tree.Node('left!'), new Tree.Node('right!'));
  //     let tree = new Tree.BinaryTree(nodes);
  //     expect(tree.postOrder(tree.root)).toEqual(['left!','right!','I am G(root)!']);
  //   });
//   it ('5.Can successfully return a collection from an inorder traversal.', () => {
//     let tree = new Tree.BinaryTree (4);
//     let treeInstance = new Tree.BinarySearchTree (4);
//     treeInstance.add(1);
//     treeInstance.add(2);
//     treeInstance.add(3);
//     treeInstance.add(5);
//     treeInstance.add(6);
//     treeInstance.add(7);
//     console.log(treeInstance);
//     expect(tree.inOrder(treeInstance)).toEqual([1,2,3,4,5,6,7]);
//   });
});
