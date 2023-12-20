////////////////////////////////////////////////////////////////////
// Date Completed 04-17-23
// KYU 8


////////////////////////////////////////////////////////////////////
// Prompt
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

///////////////////////////////////////////////////////////////////
// My Solution
const removeChar = str => str.slice(1, -1)

////////////////////////////////////////////////////////////////////
// Favorite Solution


////////////////////////////////////////////////////////////////////
// What I learned
// .pop() doesn't work for this because .pop() just returns the value that was popped off! So the only way to make this work is with .slice. 
// Out of the solutions I saw, I liked mine the best. It uses a method that is literally for this kind of problem and is a one line solution.