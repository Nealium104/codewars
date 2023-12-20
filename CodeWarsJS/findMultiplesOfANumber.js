////////////////////////////////////////////////////////////////////
// Date Completed 07-30-23
// KYU 8


////////////////////////////////////////////////////////////////////
 // Prompt
// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

///////////////////////////////////////////////////////////////////
// My Solution
function findMultiples(integer, limit) {
    let result = [];
    for (let i = integer; i <= limit; i += integer) {
        result.push(i);
    }
    return result;
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function findMultiples(int,limit){
//   return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
// }

////////////////////////////////////////////////////////////////////
// What I learned
// I always feel like using a loop in a weird way should be at least a 7, but this was a good one. I always like extending my "normal syntax" like this.
