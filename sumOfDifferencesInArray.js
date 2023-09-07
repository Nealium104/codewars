////////////////////////////////////////////////////////////////////
// Date Completed 09/07/23
// KYU 8

////////////////////////////////////////////////////////////////////
// Prompt
// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example

// [2, 1, 10]  -->  9

// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

///////////////////////////////////////////////////////////////////
// My Solution
function sumOfDifferences(arr) {
  arr.sort((a, b) => b - a);

  return arr.reduce((sum, val, index) => {
    if (index === arr.length - 1) return sum;
    return sum + (val - arr[index + 1]);
  }, 0);
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function sumOfDifferences(arr) {
//     return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// }
////////////////////////////////////////////////////////////////////
// What I learned
// This was a good one. I accidentally sorted a - b at first, but the rest was pretty easy.
