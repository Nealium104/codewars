////////////////////////////////////////////////////////////////////
// Date Completed 05-17-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.


///////////////////////////////////////////////////////////////////
// My Solution
const roundToNext5 = n => n % 5 == 0 ? n : n < 0 ? n - (n % 5) : n + (5 - n % 5) 

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function roundToNext5(n){
//     return Math.ceil(n/5)*5;
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// I remembered to do the ternary operator! Also, math.ceil is absolutely the best way to do this.