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

    let array = [];
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
    let array = [];
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
  findMaximumValue(){
    let maxValue = 0;
    function _recursionPre(node) {
      if(maxValue < node.value){
        maxValue = node.value;
      }
      if(node.left) {
        _recursionPre(node.left);
      }
      if(node.right){
        _recursionPre(node.right);
      }
    }
    _recursionPre(this.root);
    return maxValue;
  }
}

class BinarySearchTree extends BinaryTree{
  add(value){
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


module.exports = {Node, BinaryTree, BinarySearchTree};
