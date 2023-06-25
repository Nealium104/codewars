////////////////////////////////////////////////////////////////////
// Date Completed 06-25-23
// KYU 8


////////////////////////////////////////////////////////////////////
// Prompt
// Task

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.
// Example

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// Input validation

// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

///////////////////////////////////////////////////////////////////
// My Solution
function sumArray(array) {
    return array && array.length > 1 
    ? array.reduce((a, b) => a + b, 0) - Math.min(...array) - Math.max(...array) 
    : 0;
  }

////////////////////////////////////////////////////////////////////
// Favorite Solution
// sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

////////////////////////////////////////////////////////////////////
// What I learned
// For a KYU 8, I actually learned a lot! It clicked as to why with Math.min() and max() why you need to use the spread operator.
// If you just put the entire array in there, it is only technically receiving one input, so it doesn't have anything to say about it.
// I understood that I needed to use it with arrays, but didn't really connect the dots there. I also tried doing some more shorthand that
// lead to a different discovery. In my original code, I tried to get around having a null as a argument. But the code was trying to spread
// the array that was null into the Math.min method and so it would throw an error. Interesting behavior!

// I also like the favorite a lot. Clever usage of sort and slice.