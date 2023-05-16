////////////////////////////////////////////////////////////////////
// Date Completed 05-16-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// More details about factorial can be found here.


///////////////////////////////////////////////////////////////////
// My Solution
function factorial(n) {
    if (n < 0 || n > 12){
      throw new RangeError('Input must be between 0 and 12')
    } else {
    let result = 1
    for (let i = 1; i <= n; i++) {
      result = result * i
    }
    return result;
    }
  }
  

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function factorial(n) {
//   if (n < 0 || n > 12)
//     throw new RangeError();
//   return n <= 1 ? 1 : n * factorial(n - 1);
// }

////////////////////////////////////////////////////////////////////
// What I learned
// If ever I need to work with data that COULD change, I should assign the data to a variable so it doesn't need to calculate things from scratch.