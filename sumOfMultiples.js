////////////////////////////////////////////////////////////////////
// Date Completed 08-07-23
// KYU 8

////////////////////////////////////////////////////////////////////
// Prompt
// Your Job

// Find the sum of all multiples of n below m
// Keep in Mind

//     n and m are natural numbers (positive integers)
//     m is excluded from the multiples

// Examples

// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

///////////////////////////////////////////////////////////////////
// My Solution
function sumMul(n, m) {
  let arr = [];

  if (m <= n) {
    return "INVALID";
  } else {
    for (let i = 1; n * i < m; i++) {
      arr.push(n * i);
    }
  }
  return arr.reduce((a, b) => a + b);
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function sumMul(n,m){
//     if (n >= m) return "INVALID";

//   var sum = 0;
//     for (var i = n; i < m; i+=n) {
//       sum += i;
//     }
//     return sum;
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// This one was pretty easy, but I like the favorite more than mine. They found a way to do it without needing to replicate their efforts of n*i.
