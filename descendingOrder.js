////////////////////////////////////////////////////////////////////
// Date Completed 02-21-23
// KYU 7 

////////////////////////////////////////////////////////////////////
// Prompt
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


// /////////////////////////////////////////////////////////////////
// My Solution
function descendingOrder(n){
    let arr = n.toString().split('');
    return Number(arr.sort((a, b) => b - a).join(''));
    }

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// I mostly learned that you can't treat numbers like strings. I tried to use .split() without the .toString() there and it obviously didn't work.
// I also learned how to mess with the .sort method. It compares a, b. Then you can give it a function to check the first number a, against b, the next number in the series.
// Then it goes down the array and checks each one.