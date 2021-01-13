'use strict';

const _mergeSort = require('../mergeSort');

describe('Merge Sort', () => {
  it('will sort an unsorted array', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    expect(_mergeSort(arr)).toStrictEqual([ 4, 8, 15, 16, 23, 42 ]);
  });
});
