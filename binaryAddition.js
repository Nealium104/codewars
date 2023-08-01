////////////////////////////////////////////////////////////////////
// Date Completed 08-01-2023
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)



///////////////////////////////////////////////////////////////////
// My Solution
const addBinary = (a,b) => (a + b).toString(2)

////////////////////////////////////////////////////////////////////
// Favorite Solution
// const addBinary = (a, b) => (a + b).toString(2);

////////////////////////////////////////////////////////////////////
// What I learned
// To string can return a number with a base that you can define as an argument! This is one of those that I feel like you just need to know the solution.
