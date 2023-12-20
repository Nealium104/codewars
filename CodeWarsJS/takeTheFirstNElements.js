////////////////////////////////////////////////////////////////////
// Date Completed 06-15-23
// KYU 8


////////////////////////////////////////////////////////////////////
// Prompt
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice


///////////////////////////////////////////////////////////////////
// My Solution
const take = (arr, n) => arr.slice(0,n)

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function take(arr, n) {
//   let counter = 0;
//   let res = [];
//   for (let i of arr) {
//     counter += 1;
//     if (counter <= n && counter <= arr.length) {
//       res.push(i);
//     }
//   }
//   return res;
// }

////////////////////////////////////////////////////////////////////
// What I learned
// Pretty easy. Before I realized I could use a method, I was going along the loop path, but I figured it was easier this way.
