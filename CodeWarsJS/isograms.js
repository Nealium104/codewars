////////////////////////////////////////////////////////////////////
// Date Completed 02-27-23
// KYU 7

////////////////////////////////////////////////////////////////////
// Prompt
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false



// /////////////////////////////////////////////////////////////////
// My Solution
function isIsogram(str) {
    let newStr = str.toLowerCase();
    let charArray = [];
    for (let i = 0; i < newStr.length; i++) {
      let char = newStr[i];
      if (charArray.includes(char)) {
        return false;
      }
      charArray.push(char);
    }
    return true;
  }

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function isIsogram(str){
// 	return new Set(str.toUpperCase()).size == str.length;
// }

////////////////////////////////////////////////////////////////////
// What I learned
// Learned what an isogram is and used a loop in a rather unique way. This one took a lot of time. Also learned about the Set object. The Set object can only have unique values, so it is the perfect usecase for this problem.