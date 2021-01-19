'use strict';

const obj = require('../hashtable');

describe('HashMap tests', () => {
  it('Can instantiate an empty hashmap', () => {
    const newHash = new obj.HashMap(1);
    expect(newHash).toBeEmpty;
  });
  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    const hash = new obj.HashMap(5);
    hash.set('hello', 'goodbye');
    expect(hash.get('hello')).toBe('goodbye');
  });
  it('Retrieving based on a key returns the value stored', () => {
    const hash = new obj.HashMap(5);
    hash.set('hello', 'goodbye');
    hash.set('Tina', 'what\'s up?');
    // console.log(hash.get('Tina')));
    expect(hash.get('Tina')).toEqual('what\'s up?');
  });
  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    const hash = new obj.HashMap(3);
    hash.set('Tina', 'says hi');
    hash.set('hello', 'means goodbye');
    expect(hash.get('hi')).toBe(null);
  });
  it('Successfully handle a collision within the hashtable', () => {
    const hash = new obj.HashMap(2);
    hash.set('Tina', 'says hi');
    hash.set('Tina', 'says hello');
    expect(hash.size).toBe(2);
  });
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const hash = new obj.HashMap(2);
    hash.set('cat', 'meow');
    hash.set('dog', 'woof');
    hash.set('bird', 'tweet');
    hash.set('cow', 'moo');
    // console.log(hash.get('cow'));
    expect(hash.get('bird')).toBe('tweet');
  });
  it('Successfully hash a key to an in-range value', () => {
    const newHash = new obj.HashMap(50);
    newHash.set('this', 'will work');
    console.log(newHash.hash('Tedashi'));
    expect(newHash.hash('this')).toBeLessThan(50);
  });
});
