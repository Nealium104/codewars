////////////////////////////////////////////////////////////////////
// Date Completed 06-03-23
// KYU 8


////////////////////////////////////////////////////////////////////
// Prompt
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:

// h = 0
// m = 1
// s = 1

// result = 61000

///////////////////////////////////////////////////////////////////
// My Solution
const past = (h, m, s) => h * 3600000 + m * 60000 + s * 1000

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function past(h, m, s){
//     var hours = h * 60 * 60 * 1000;
//     var minutes = m * 60 * 1000;
//     var seconds = s * 1000;
    
//     return hours + minutes + seconds;
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// This one was easy, but I liked how readable the favorite is.
