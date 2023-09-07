////////////////////////////////////////////////////////////////////
// Date Completed 09-06-23
// KYU 8


////////////////////////////////////////////////////////////////////
// Prompt
// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example:

// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0

// For ASCII table, you can refer to http://www.asciitable.com/


///////////////////////////////////////////////////////////////////
// My Solution
const getChar = c => String.fromCharCode(c)

////////////////////////////////////////////////////////////////////
// Favorite Solution
// var getChar = String.fromCharCode

////////////////////////////////////////////////////////////////////
// What I learned
// This one was actually pretty useful to know. I was trying to call fromCharCode from nothing
// because I wasn't exactly sure what I should be doing with it. I looked up how it was normally
// used and saw that it's called just from String. Really neat! It's like calling from the type.