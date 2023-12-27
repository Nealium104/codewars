////////////////////////////////////////////////////////////////////
// Date Completed 12/26/23
// KYU 6
// Lang JavaScript

////////////////////////////////////////////////////////////////////
// Prompt
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

///////////////////////////////////////////////////////////////////
// My Solution
function duplicateEncode(word) {
  const splitString = word.toLowerCase().split("");
  let result = [];
  let count = {};

  for (let i = 0; i < splitString.length; i++) {
    let char = splitString[i];
    count[char] = (count[char] || 0) + 1;
  }

  for (const item of splitString) {
    if (count[item] > 1) {
      result.push(")");
    } else {
      result.push("(");
    }
  }

  result = result.join("");
  return result;
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function duplicateEncode(word){
//   return word
//     .toLowerCase()
//     .split('')
//     .map( function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//     })
//     .join('');
// }

////////////////////////////////////////////////////////////////////
// What I learned
// I like the favorite because it's clever, but it's difficult to read for sure. For this one, I got some good practice with loops,
// and in particular selecting data from an object. I need to do some drilling with that in particular because it seems to be a barrier in these 6's.
