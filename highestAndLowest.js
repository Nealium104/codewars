////////////////////////////////////////////////////////////////////
// Date Completed 03-08-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes

//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.



///////////////////////////////////////////////////////////////////
// My Solution
function highAndLow(numbers){
    numbers = numbers.split(' ')
    let arr = []
    arr.push(Math.max(...numbers))
    arr.push(Math.min(...numbers))
    return arr.join(' ')
  }

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function highAndLow(numbers){
//   numbers = numbers.split(' ');
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }

////////////////////////////////////////////////////////////////////
// What I learned
// I have to look for times to use template literals. This was a perfect time. This one was a little harder since I kept trying to work with just numbers instead of converting from and to a string first.
// When I work on these, I really need to pay attention to the big picture intstead of just charging ahead.