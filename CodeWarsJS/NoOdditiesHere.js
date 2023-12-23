////////////////////////////////////////////////////////////////////
// Date Completed 12/23/23
// KYU 8
// Lang JavaScript

////////////////////////////////////////////////////////////////////
// Prompt
// Write a small function that returns the values of an array that are not odd.
//
// All values in the array will be integers. Return the good values in the order they are given.


///////////////////////////////////////////////////////////////////
// My Solution
function noOdds( values ){
  let newArr = []
  for(let i = 0; i <= values.length; i++){
    if(values[i] % 2 == 0){
      newArr.push(values[i])
    }
  }
  return newArr
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
var noOdds = values => values.filter(x => x % 2 === 0);

////////////////////////////////////////////////////////////////////
// What I learned
// Made some silly little syntax mistakes. I forgot about the filter method too.