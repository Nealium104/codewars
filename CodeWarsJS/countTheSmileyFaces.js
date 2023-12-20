////////////////////////////////////////////////////////////////////
// Date Completed 05-27-23
// KYU 6


////////////////////////////////////////////////////////////////////
// Prompt
Description:

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

//     Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//     A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//     Every smiling face must have a smiling mouth that should be marked with either ) or D

// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
// Example

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// Note

// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.


///////////////////////////////////////////////////////////////////
// My Solution
function countSmileys(arr) {
    let count = 0
    let regex = /^(:|;)(-|~)?(\)|D)$/;
    arr.forEach(smiley => {
      if(regex.test(smiley)){
        count++
      }
    })
    return count
  }

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function countSmileys(arr) {
//     return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// I'm so glad I learned the basics of regex the other day! I didn't know how to really apply that until this
// problem though. I can't believe I'm solving KYU 6's without using any tools!