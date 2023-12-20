////////////////////////////////////////////////////////////////////
// Date Completed 08-08-23
// KYU 8

////////////////////////////////////////////////////////////////////
// Prompt
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

///////////////////////////////////////////////////////////////////
// My Solution
function squareArea(A) {
  const radius = (A * 4) / (2 * Math.PI);

  return Math.pow(radius, 2);
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// squareArea = A => +Math.pow((2 * A / 3.1416), 2).toFixed(2);

////////////////////////////////////////////////////////////////////
// What I learned
// I don't really like the ones that are just math questions. I should be better at math, but I'm trying to focus on code.
