////////////////////////////////////////////////////////////////////
// Date Completed 02-25-23
// KYU 8 

////////////////////////////////////////////////////////////////////
// Prompt
// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true


// /////////////////////////////////////////////////////////////////
// My Solution
const setAlarm = (employed, vacation) => employed === true && vacation === false

////////////////////////////////////////////////////////////////////
// Favorite Solution
// const setAlarm = (employed, vacation) => employed && !vacation;

////////////////////////////////////////////////////////////////////
// What I learned
// I tried to do the solution that my favorite one did, but I compared with the operator, so I was only checking if they were different. I learned that if you put a ! before the variable, it'll just check if that variable is false. And because booleans are a binary, that would have to mean that the first one, to not be equal, would have to be true. 