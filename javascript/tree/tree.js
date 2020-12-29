'use strict';

class Node{
  constructor(value=null, left=null, right=null){
    this.right = right;
    this.left = left;
    this.value = value;
  }
}

class BinaryTree{
  constructor(root=null){
    this.root = root;
  }

  preOrder(){
    let array = [];
    let _walk = (node) => {
      array.push(node.value);
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return array;
  }

  inOrder(){
    // starting with an empty array
    let array = [];
    // recursive helper function to traverse through the tree
    let _walk = (node) => {
      if(node.left) {
        _walk(node.left);
      }
      array.push(node.value);
      if(node.right) {
        _walk(node.right);
      }
    };
    _walk(this.root);
    return array;
  }
  postOrder(){
    // starting with an empty array
    let array = [];
    // recursive helper function to traverse through the tree
    const _walk = (node) => {
      if(node.left) {
        _walk(node.left);
      }
      if(node.right) {
        _walk(node.right);
      }
      array.push(node.value);
    };
    _walk(this.root);
    return array;
  }
}
// findMaximumValue(){
//   let arrayValues = inOrder(root);
//   let max = 0;
//   for ( let i = 0; i <= arrayValues.length; i ++){
//     if (arrayValues[i] > max )
//       max = arrayValues[i];
//   }
//   return max;
// }

class BinarySearchTree extends BinaryTree{
  add(value){
    //if we are adding to a BST, the value has to be an int
    if(typeof value !=='number'){
      return null;
    }
    if(!this.root){
      this.root = new Node(value);
    }
    let _insert = (node) => {
      if(value < node.value){
        if( node.left === null ){
          node.left = new Node(value);
          return;
        } else if (node.left !== null){
          return _insert(node.left);
        }
      } else if( value >= node.value ){
        if (node.right === null){
          node.right = new Node(value);
          return;
        } else if( node.right !== null){
          return _insert(node.right);
        }
      }
    };
    _insert(this.root);
  }
  contains(root, value){
    function _search(root, value){
      if(!root){ return; }
      else if (root.value === value || root.left.contains(value) || root.right.contains(value)){
        return true;
      } else {
        return false;
      }
    }
    _search(root, value);
  }
}
// class BinarySearchTree{
//   constructor(root = null){
//     this.root = new Node (root);
//   }
// add(value){
//   let newNode = new Node(value);
//   if (!this.root){
//     this.root = newNode;
//   } else {
//     _helper(this.root, newNode);
//   }
//   function _helper(node, newNode){
//   //   let currentNode = root;
//     if (newNode.value < node.value){
//       if ( !node.left ){
//         node.leftChild = newNode;
//       } else {
//         _helper (node.left, newNode);
//       }
//     } else if (!node.right){
//       node.rightChild = newNode;
//     } else {
//       _helper(node.right, newNode);
//     }
//   }
// }

// contains(root, value){
//   function _search(root, value){
//     if(!root){ return; }
//     else if (root.value === value || root.left.contains(value) || root.right.contains(value)){
//       return true;
//     } else {
//       return false;
//     }
//   }
//   _search(root, value);
// }
// }




module.exports = {Node, BinaryTree, BinarySearchTree};
