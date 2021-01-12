'use strict';

const insertionSort = require('../insertionSort');
require('../insertionSort');

describe('Insertion Sort', () => {
  it('will sort the numbers in the array from lowest to highest', () => {
    let arr = [4, 1, 6, 12, 10];
    console.log(arr.length);
    expect(insertionSort(arr)).toEqual([1, 4, 6, 10, 12]);
  });
});
