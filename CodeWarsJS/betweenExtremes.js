////////////////////////////////////////////////////////////////////
// Date Completed 04-08-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// Given an array of numbers, return the difference between the largest and smallest values.

// For example:

// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.


///////////////////////////////////////////////////////////////////
// My Solution
const betweenExtremes = numbers => Math.max(...numbers) - Math.min(...numbers)

////////////////////////////////////////////////////////////////////
// Favorite Solution
// const betweenExtremes = n => (l => l[0] - l[l.length-1])(n.sort((a, b) => b - a))

////////////////////////////////////////////////////////////////////
// What I learned
// You have to use the spread operator EVERY TIME there is more than one input, i.e., use the spread operator with arrays! I figured it out by guessing, but I've
// had this problem enough that I should know.
