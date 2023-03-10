////////////////////////////////////////////////////////////////////
// Date Completed
// 02-13-22

////////////////////////////////////////////////////////////////////
// Prompt
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// /////////////////////////////////////////////////////////////////
// My Solution
const solution = str => str.split('').reverse().join('')

////////////////////////////////////////////////////////////////////
// Favorite Solution
//This one is pleasantly over engineered
// function solution(str){
//     return str.length > 0 ? solution(str.substring(1)) + str.charAt(0) : '';
//   }

////////////////////////////////////////////////////////////////////
// What I learned
//.reverse() only works on arrays