////////////////////////////////////////////////////////////////////
// Date Completed 07-22-23
// KYU 6


////////////////////////////////////////////////////////////////////
// Prompt
// Task

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

///////////////////////////////////////////////////////////////////
// My Solution
function sortArray(array) {
    let oddNums = []
    let oddIndices = []
    
    for(let i = 0; i < array.length; i++){
      if(array[i] % 2 !== 0){
        oddNums.push(array[i])
        oddIndices.push(i)
      }
      oddNums.sort((a,b) => a - b)
    }
    
    for(let i = 0; i < oddIndices.length; i++){
      array[oddIndices[i]] = oddNums[i]
    }
    return array
  }
  

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//     return array.map((x) => x % 2 ? odd.shift() : x);
// }

////////////////////////////////////////////////////////////////////
// What I learned
// For the record, my solution is SUPER slow. I didn't think of using the .shift method in this way. Also,
// I learned about bracket notation just the other day and immediately found a use for it here!
