////////////////////////////////////////////////////////////////////
// Date Completed 03-12-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

///////////////////////////////////////////////////////////////////
// My Solution
const rowSumOddNumbers = n => Math.pow(n,3)

////////////////////////////////////////////////////////////////////
// Favorite Solution
// const rowSumOddNumbers = n => Math.pow(n,3)

////////////////////////////////////////////////////////////////////
// What I learned
// This one seemed like it was going to be impossible to solve, but I just did some examples and let my mind wander a little bit. Sometimes the solution
// is just pattern recognition!