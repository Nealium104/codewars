////////////////////////////////////////////////////////////////////
// Date Completed 08-03-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

// However, the arrays can have varying lengths, not just limited to 4.

///////////////////////////////////////////////////////////////////
// My Solution
const binaryArrayToNumber = arr => {
    arr = arr.reverse()
    let result = 0;
    for(let i = 0; i < arr.length; i++){
     result += arr[i] * Math.pow(2, i)
    }
    return result
  }

////////////////////////////////////////////////////////////////////
// Favorite Solution
// const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

////////////////////////////////////////////////////////////////////
// What I learned
// This was tricky! I had to really think hard to realize I needed to do the Math.pow thing.
// But also, I didn't realize I could do this with parseInt!