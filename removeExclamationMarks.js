////////////////////////////////////////////////////////////////////
// Date Completed 03-06-23
// KYU 8 

////////////////////////////////////////////////////////////////////
// Prompt
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


// /////////////////////////////////////////////////////////////////
// My Solution
function removeExclamationMarks(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== '!') {
        result += s[i];
      }
    }
    return result;
  }


////////////////////////////////////////////////////////////////////
// Favorite Solution
// function removeExclamationMarks(s) {
//     return s.split('!').join('');
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// I should try to look for more clever solutions like my favorite. I didn't need to go through so much effort.