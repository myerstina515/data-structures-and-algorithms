# Stacks and Queues

> Implementation of stack and queue methods

## Challenge

> Create a Node, Stack, and Queue class.
> In the Stack class, write functions for: push, pop, peek, isEmpty, and create a reference to the top node
> In the Queue class, write functions for: enqueue, dequeue, peek, isEmpty, and create a reference to the front node
> Create tests for functionality on all of the methods

## API Approach & Efficiency

> I attempted to utilize the single responsibility principle, and the Big O value is O(1) for space time, unless specified below:
> Stack: Big O of push() and pop() is O(n), because every node in the stack will be shifted for each of these. Push takes a value and adds it to the top of the stack, while pop() removes the top value from the stack.
> Queue: Big O of enqueue is O(1), as it pushes into the back, which shifts all of the other nodes in the queue. However, Big O of dequeue is still O(n), because it removes the front node and doesn't impact the rest of the positioning.
> Other methods that are available to both stack and queue: Peek() returns the value of the top or front value without changing anything, and therefore is O(1), while isEmpty checks to see if the stack or queue are empty, returnign true if they are, and false if they are not. Also O(1)
