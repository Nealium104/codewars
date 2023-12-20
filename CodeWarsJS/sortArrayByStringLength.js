////////////////////////////////////////////////////////////////////
// Date Completed 05-15-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.


///////////////////////////////////////////////////////////////////
// My Solution
function sortByLength(array) {
    return array.sort(function(a, b) {
      return a.length - b.length
    });
  }  

////////////////////////////////////////////////////////////////////
// Favorite Solution
// let sortByLength = arr => arr.sort((a,b) => a.length - b.length);

////////////////////////////////////////////////////////////////////
// What I learned
// So the .sort() method will sort just based upon the first value it sees. But you can add a function to it to sort in a different way!