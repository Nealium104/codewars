////////////////////////////////////////////////////////////////////
// Date Completed 09-02-23
// KYU 7

////////////////////////////////////////////////////////////////////
// Prompt
// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

//     Take a list of ages when each of your great-grandparent died.
//     Multiply each number by itself.
//     Add them all together.
//     Take the square root of the result.
//     Divide by two.

// Example

// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

// Note: the result should be rounded down to the nearest integer.

// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.

///////////////////////////////////////////////////////////////////
// My Solution
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let arr = [age1, age2, age3, age4, age5, age6, age7, age8];

  return Math.floor(
    Math.sqrt(arr.reduce((acc, cur) => acc + cur * cur, 0)) / 2
  );
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;

////////////////////////////////////////////////////////////////////
// What I learned
// This was pretty easy, just chaining methods together. The favorite is SO clever.
// It just allows any number of arguments and then the person that made it realized that
// the formula is just the pythagorian theorum. I think the thing to take away from this
// one is just to really, REALLY stop and look at the problem first. No matter how simple
// it seems. I started trying to average them before I even really understood the problem.
