////////////////////////////////////////////////////////////////////
// Date Completed 04-21-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples

//     "foefet" is an anagram of "toffee"

//     "Buckethead" is an anagram of "DeathCubeK"

///////////////////////////////////////////////////////////////////
// My Solution
const isAnagram = (test, original) => {
    test = test.toLowerCase();
    original = original.toLowerCase();
    if (test.length !== original.length) {
      return false;
    }
    let tArr = test.split('').sort();
    let oArr = original.split('').sort();
    for (let i = 0; i < tArr.length; i++) {
      if (tArr[i] !== oArr[i]) {
        return false;
      }
    }
    return true;
  };

////////////////////////////////////////////////////////////////////
// Favorite Solution
// write the function isAnagram
// var isAnagram = function(test, original) {
//     var t = test.toLowerCase().split('').sort().join('');
//     var o = original.toLowerCase().split('').sort().join('');
//     return (t==o)?true:false;
//   };

////////////////////////////////////////////////////////////////////
// What I learned
// I'm still getting confused on where I should put my return statement in nested arrays