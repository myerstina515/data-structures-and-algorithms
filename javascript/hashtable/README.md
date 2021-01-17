# Hashtables

> A hashtable is a series of buckets (in an array form) that may contain linked lists of key:value pairs. When the key is provided to the algorithm, it is hashed into a numeric value that will refer to the array index (hash). If there are multiple of the same hashes, the linked list will help to differentiate the specific location in the table.

## Challenge

> Implement a Hashtable with the following methods:
> add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
> get: takes in the key and returns the value from the table.
> contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
> hash: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency

> Big O time, space: O(n), O(1)

## API

> add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
> get: takes in the key and returns the value from the table.
> contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
> hash: takes in an arbitrary key and returns an index in the collection.