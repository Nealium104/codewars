////////////////////////////////////////////////////////////////////
// Date Completed 03-05-2023
// KYU 8

////////////////////////////////////////////////////////////////////
// Prompt
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

//     don't worry about uppercase vowels
//     y is not considered a vowel for this kata



// /////////////////////////////////////////////////////////////////
// My Solution
function shortcut (string) {
    return string.split('').filter(letter => !['a', 'e', 'i', 'o', 'u'].includes(letter)).join('');
  }


////////////////////////////////////////////////////////////////////
// Favorite Solution
// function shortcut(string){
//     return string.replace(/[aeiou]/g,'')
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// The filter method only accepts one argument.