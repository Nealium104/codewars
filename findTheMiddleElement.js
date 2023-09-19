////////////////////////////////////////////////////////////////////
// Date Completed 03-27-23
// KYU 7

////////////////////////////////////////////////////////////////////
// Prompt
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0

// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1

// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

///////////////////////////////////////////////////////////////////
// My Solution
const gimme = (triplet) => {
  for (let i = 0; i < triplet.length; i++) {
    if (
      triplet[i] !== Math.max(...triplet) &&
      triplet[i] !== Math.min(...triplet)
    ) {
      return triplet.indexOf(triplet[i]);
    }
  }
};

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function gimme(a) {
//     return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// Remember that you need a spread operator for the Math.max and min methods! I need to get better at identifying when a for loop is the best option.
// Also, filter returns an array, so you can't do array methods with filter.
