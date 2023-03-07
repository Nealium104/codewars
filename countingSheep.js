////////////////////////////////////////////////////////////////////
// Date Completed 03-07-23
// KYU 8

////////////////////////////////////////////////////////////////////
// Prompt
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined


///////////////////////////////////////////////////////////////////
// My Solution
function countSheeps(arrayOfSheep) {
    let result = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] === true) result ++;
    }
    return result;
  }

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }

////////////////////////////////////////////////////////////////////
// What I learned
// I was pretty happy with this one. Everything made sense and my first guess worked. I'm researching the filter method after this.