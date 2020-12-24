'use strict';
let multiBracketMatching = (str) => {
  let newArray = [];
  let openBracket = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  let closedBracket = {
    '}': true,
    ']': true,
    ')': true
  };
  for (let i = 0; i < str.length; i++) {
    let character = str[i];
    if (openBracket[character]) {
      newArray.push(character);
    } else if (closedBracket[character]) {
      if (openBracket[newArray.pop()] !== character) return false;
    }
  }
  return newArray.length === 0;
};

module.exports = multiBracketMatching;

// //testing
//   console.log('{}');
//   console.log('{}(){}');
//   console.log('()[[]]');
//   console.log('(){}[[]]');
//   console.log('{}{}[](())');
//   console.log('[({}]');
//   console.log('(](');
//   console.log('{(})');
