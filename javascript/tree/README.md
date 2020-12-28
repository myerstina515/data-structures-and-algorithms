# Trees

> Working on Binary Trees and Binary Search Trees

## Challenge

> Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge.

## Approach & Efficiency

> I started with creating a Node class, then the Binary Tree followed by Binary Search Tree. Thought about it similarly like the linked list traversal, but with the right and left child.
> Big O space is O(log2^h), time is O(n)

## API

> preOrder: traverses the tree starting at the root, then moving to the left child and all of it's children, then to the right child and all of it's children.
> inOrder: traverses the tree starting with the leftmost node regardless of what depth the nodes are.
> postOrder: traverses the tree starting with the topmost, moving to the left then right child, then moves left to right on the grandchild layer, and so on.
> add: Adds new nodes to the tree in the correct place.
> contains: checks to see if the node exits in the tree yet.

