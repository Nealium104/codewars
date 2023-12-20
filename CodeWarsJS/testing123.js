////////////////////////////////////////////////////////////////////
// Date Completed 03-14-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

///////////////////////////////////////////////////////////////////
// My Solution
const number = array => {
    return array.map((arrayItem, i) => `${i + 1}: ${arrayItem}`)
  }

////////////////////////////////////////////////////////////////////
// Favorite Solution
// var number = function(arr) {
//     var newArr = [];
//       if (arr.length === 0) {
//         return [];
//       } else {
//         for (var i = 0, len = arr.length; i < len; i += 1) {
//           newArr.push((i + 1) + ': ' + arr[i]);
//         }
//       }
//       return newArr;
//     }

////////////////////////////////////////////////////////////////////
// What I learned
// I actually like the solution I came up with more. But the favorite solution is the one I started trying to do first, but I got stuck when I tried to use 