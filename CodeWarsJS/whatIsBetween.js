////////////////////////////////////////////////////////////////////
// Date Completed 02-22-23
// KYU 8

////////////////////////////////////////////////////////////////////
// Prompt
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// /////////////////////////////////////////////////////////////////
// My Solution
function between(a, b) {
    let c = [];
    for(let i = a; i <= b; i++){
    c.push(i);
    }
return c;
  }

////////////////////////////////////////////////////////////////////
// Favorite Solution
//const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);

////////////////////////////////////////////////////////////////////
// What I learned
// This one was fairly easy. I got to use the iterator as what gets pushed to the array, though. That's not something I've done before.