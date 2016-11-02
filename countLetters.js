'use strict';

function countLetters(input) {

var str = input.replace(/ /, "") // replace spaces with no spaces

var obj = {}; // create empty storage for keys/values

  for(var i = 0; i < str.length; i++) {
    var letter = str[i];

    debugger;
    if(obj[letter] !== undefined)
      obj[letter] += 1 // add one to object key value if a key already exists
    else
      obj[letter] = 1 // create new object key with value 0
  }

return obj;
};

console.log(countLetters("Lighthouse"));

