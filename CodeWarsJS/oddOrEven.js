////////////////////////////////////////////////////////////////////
// Date Completed 07-16-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// Task:

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).
// Examples:

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// Have fun!
// Fundamentals

///////////////////////////////////////////////////////////////////
// My Solution
const oddOrEven = array => array.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd'

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function oddOrEven(array) {
//     if(array.length == 0){
//       return 'even'
//     }
//     var sum = array.reduce(add, 0)
//     function add(x, y){
//       return x + y
//     }
    
//     if(sum % 2 == 0){return 'even'}
//     else{return 'odd'}
//  }

////////////////////////////////////////////////////////////////////
// What I learned
// Still have trouble reading the darn question. I was judging the length of the arrays, not the actual sum for a little bit.
// I don't actually like the favorite very much, but it was the most different one.