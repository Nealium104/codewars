////////////////////////////////////////////////////////////////////
// Date Completed 06-11-23
// KYU 8


////////////////////////////////////////////////////////////////////
// Prompt
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


///////////////////////////////////////////////////////////////////
// My Solution
const fakeBin = x => x.split('').map(Number).map(a => a >= 5 ? '1' : '0').join('')

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function fakeBin(x) {
//     return x.replace(/\d/g, d => d < 5 ? 0 : 1);
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// Should've exercised my regular expression muscles!