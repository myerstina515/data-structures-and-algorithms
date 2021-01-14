const quickSort = require('../quickSort');

describe('quick sort', () => {
  it('will sort an array from smallest to largest', () => {
    let arr = [-1,67,3,-8,12,52,6];
    expect(quickSort(arr)).toStrictEqual([-8, -1, 3, 6, 12, 52, 67]);
  });
});
