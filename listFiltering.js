////////////////////////////////////////////////////////////////////
// Date Completed 02-24-23
// KYU 7

////////////////////////////////////////////////////////////////////
// Prompt


// /////////////////////////////////////////////////////////////////
// My Solution
function filter_list(l) {
    return l.filter(listItem => typeof listItem !== 'string')
   }

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function filter_list(l) {
//   return l.filter(e => Number.isInteger(e));
// }

////////////////////////////////////////////////////////////////////
// What I learned
// For some reason, I thought isString() was a method, but it's not. I was also reminded that you compare datatypes by literally typing out the data type, for example, to compare and see if it's a string, you literally type 'string'