'use strict';
const repeatedWord = require('../repeatedWord');

describe('repeat word hash map', () => {
  it('will return the first repeated word', () => {
    const string = 'Once upon a time, there was a brave princess who';
    let result = repeatedWord(string);
    expect(result).toBe('a');
  });
});
