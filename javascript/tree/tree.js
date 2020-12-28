'use strict';

class Node{
  constructor(value=null, leftChild=null, rightChild=null){
    this.rightChild = rightChild;
    this.leftChild = leftChild;
    this.value = value;
  }
}

class BinaryTree{
  constructor(root = null){
    this.root = new Node(root);
  }


  preOrder(root){
    // starting with an empty array
    // recursive helper function to traverse through the tree
    let array = [];
    function _helper(root) {
      if (!root) return; // if root does not exist, return undefined
      array.push(root.value); // push value into array. The order of the push/left/right makes it a pre-order
      _helper(root.left);
      _helper(root.right);
    }
    _helper(root);
    return array;
  }
  inOrder(root){
    // starting with an empty array
    let array = [];
    // recursive helper function to traverse through the tree
    const _helper = root => {
      if (!root) return undefined;//if root does not exist, return undefined
      _helper(root.left);
      array.push(root.value);
      _helper(root.right);
    };
    _helper(root);
    return array;
  }
  //   postOrder(root){
  //     function postOrderHelper(root) {
  //       if (root !== null) {
  //         postOrderHelper(root.left);
  //         postOrderHelper(root.right);
  //         array.push(root.value);
  //       }
  //     }
  //     let array = [];
  //     postOrderHelper(root);
  //     return array;
  //   }
  postOrder(rootNode) { //create the postOrder method

    let orderedArray = []; //declare an empty array to hold the output

    function _recursionPost(rootNode) { //create a recursive function to traverse the tree

      if(!rootNode) {
        return;
      }

      _recursionPost(rootNode.left);
      _recursionPost(rootNode.right);
      orderedArray.push[rootNode.value];
    }
    _recursionPost(rootNode);
    return orderedArray; //return the output array
    //   postOrder(root){
    //     // starting with an empty array
    //     let array = [];
    //     // recursive helper function to traverse through the tree
    //     const _helper = (root) => {
    //       if (!root) return undefined;
    //       _helper(root.left);
    //       _helper(root.right);
    //       array.push[root.value];
    //     };
    //     _helper(root);
    //     return array;
  }
}
class BinarySearchTree{
  constructor(root = null){
    this.root = new Node (root);
  }
  add(value){
    let newNode = new Node(value);
    if (!this.root){
      this.root = newNode;
    } else {
      _helper(this.root, newNode);
    }
    function _helper(node, newNode){
    //   let currentNode = root;
      if (newNode.value < node.value){
        if ( !node.left ){
          node.leftChild = newNode;
        } else {
          _helper (node.left, newNode);
        }
      } else if (!node.right){
        node.rightChild = newNode;
      } else {
        _helper(node.right, newNode);
      }
    }
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




module.exports = {Node, BinaryTree, BinarySearchTree};
