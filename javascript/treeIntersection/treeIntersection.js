'use strict';
const HashMap = require('../hashtable/hashtable');
function treeIntersection(treeOne, treeTwo) {
  let outputArray = [];
  if (!treeOne.root || !treeTwo.root) { throw new Error }
  function preOrder(root) {
    const preOrderHelper = root => {
      HashMap.set(root.value, true);
      preOrderHelper(root.left);
      preOrderHelper(root.right);
    };
    preOrderHelper(root);
  }
  preOrder(treeOne.root);
  function preOrderTwo(root) {
    const preOrderHelperTwo = root => {
      HashMap.contains(root.value) ? outputArray.push(root.value) : null;
      preOrderHelperTwo(root.left);
      preOrderHelperTwo(root.right);
    };
    preOrderHelperTwo(root);
  }
  preOrderTwo(treeTwo.root);
  return outputArray;
}
module.exports = treeIntersection;