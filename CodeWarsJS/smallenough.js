////////////////////////////////////////////////////////////////////
// Date Completed 07-11-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.


///////////////////////////////////////////////////////////////////
// My Solution
function smallEnough(a, limit) {
    for(let i = 0; i < a.length; i++) {
        if(a[i] > limit) {
            return false; 
        }
    }
    return true;
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function smallEnough(a, limit){
//     return Math.max(...a) <= limit
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// This felt like a very 'duh' moment when I saw the favorite, but I think I used the loop in a fun way here.
