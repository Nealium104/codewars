////////////////////////////////////////////////////////////////////
// Date Completed 05-12-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)
// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3



///////////////////////////////////////////////////////////////////
// My Solution
function stray(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result ^= numbers[i];
    }
    return result;
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function stray(numbers){
//     for (var i in numbers){
//        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
//     }
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// I learned that javascript has a XOR function!