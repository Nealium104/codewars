//Date Completed
//02-12-23
///////////////////////////////////////////////////////////////////////////////
//Prompt
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// Examples

// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
//////////////////////////////////////////////////////////////////////////////
//My solution

function powersOfTwo(n){
    let result = [1];
    for (let i = 1; i <= n; i++) {
        result.push(Math.pow(2, i));
    }
    return result;
  }
/////////////////////////////////////////////////////////////////////////////
//Favorite Solution
// function powersOfTwo(n) {
//   return Array.from({length: n + 1}, (v, k) => 2 ** k);
// }
/////////////////////////////////////////////////////////////////////////////
//What I learned
//You can't use an iterator (I tried to use .map) if there's no array to iterate from. So, if you want to return an array from a single value, then you need to initalize an empty (or in the case of math shennanigans, a 1) array
//This sounds dumb, but the result of a for loop will modify what you tell it to modify (aka result.push instead of n.push)