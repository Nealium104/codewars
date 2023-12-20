////////////////////////////////////////////////////////////////////
// Date Completed 09-15-23
// KYU 7

////////////////////////////////////////////////////////////////////
// Prompt
// Instructions

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example (Input --> Output)

// "CodEWaRs" --> [0,3,4,6]

///////////////////////////////////////////////////////////////////
// My Solution
const capitals = (word) => {
  word = word.split("");
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      result.push(i);
    }
  }
  return result;
};

////////////////////////////////////////////////////////////////////
// Favorite Solution
// var capitals = function (word) {
// 	return word.split('').reduce(function(memo, v, i) {
//     return v === v.toUpperCase() ? memo.concat(i) : memo;
//   }, []);
// };

////////////////////////////////////////////////////////////////////
// What I learned
// I felt very comfortable in this one. Like the mistakes I made I could easily figure out.
