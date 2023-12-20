////////////////////////////////////////////////////////////////////
// Date Completed 06-22-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

// Let's assume that all numbers in the input will be integer values.


///////////////////////////////////////////////////////////////////
// My Solution
function sumDigits(number) {
    return Math.abs(number)
      .toString()
      .split('')
      .map(a => parseInt(a))
      .reduce((a, b) => a + b, 0);
  }

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function sumDigits(number) {
//     return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// For some reason, I was trying to use Math.abs later in the function. I was trying
// to do that on the individual digits in the .map, but I realized that if I just
// made the number absolute at the beginning, I wouldn't have that problem. Also, in the
// favorite, I didn't realize I could just add a + sign and the numbers will be positive. Neat.
