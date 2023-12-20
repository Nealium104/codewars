////////////////////////////////////////////////////////////////////
// Date Completed 08-06-23
// KYU 7

////////////////////////////////////////////////////////////////////
// Prompt
// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

///////////////////////////////////////////////////////////////////
// My Solution
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((num) => num % 2 === 0);
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// const getEvenNumbers = arr =>
// 	arr.filter(x => !(x & 1));

////////////////////////////////////////////////////////////////////
// What I learned
// The favorite is just a weirder way to do it. This was an easy one.
