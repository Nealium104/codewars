////////////////////////////////////////////////////////////////////
// Date Completed 07-09-2023
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square



///////////////////////////////////////////////////////////////////
// My Solution
const findNextSquare = sq => {
    sq += 1
    if(Math.sqrt(sq) % 1 === 0){
        while(Math.sqrt(sq) % 1 != 0){
            sq += 1
        }
        return sq
    } else {
        return -1
    }
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// const findNextSquare = sq => {
//     if(Math.sqrt(sq) % 1 === 0){
//         let root = Math.sqrt(sq) + 1;
//         return root * root;
//     } else {
//         return -1;
//     }
// }

////////////////////////////////////////////////////////////////////
// What I learned
// I found a use case for a while loop instead of a for loop! Always build your loops knowing what you're ACTUALLY measuring. I was
// comparing square instead of the square root of square. Also, the favorite is definitely a more efficient method.
