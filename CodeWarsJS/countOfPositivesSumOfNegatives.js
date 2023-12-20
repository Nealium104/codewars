////////////////////////////////////////////////////////////////////
// Date Completed 03-26-23
// KYU 8


////////////////////////////////////////////////////////////////////
// Prompt
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


///////////////////////////////////////////////////////////////////
// My Solution
function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
    return []
  }
  let positiveCount = 0
  let negativeSum = []

  input.map(inputItem => {
    if(inputItem > 0){
      positiveCount++
    } else {
      negativeSum.push(inputItem)
    } 
  })
    negativeSum = negativeSum.reduce((acc, cur) => acc + cur, 0)
    return [positiveCount, negativeSum]
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }

////////////////////////////////////////////////////////////////////
// What I learned
// Read the problem and take the time to understand it! When you initialize a variable, it's a good idea to initialize with whatever data type you have in mind,
// otherwise you might get like a NaN error. Also, check those additional little points at the beginning like, "if it's empty, return an empty array". Your logic
// can get caught up in that stuff