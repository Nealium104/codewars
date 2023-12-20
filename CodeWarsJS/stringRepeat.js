////////////////////////////////////////////////////////////////////
// Date Completed 03-04-23
// KYU 8

////////////////////////////////////////////////////////////////////
// Prompt
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"



// /////////////////////////////////////////////////////////////////
// My Solution

function repeatStr (n, s) {
    const repeat = []
    for(let i = 0; i < n; i++){
      repeat.push(s)
    }return repeat.join('')
  }
////////////////////////////////////////////////////////////////////
// Favorite Solution
// function repeatStr (n, s) {
//   return s.repeat(n);
// }

////////////////////////////////////////////////////////////////////
// What I learned
// I actually overengineered this one. I didn't think .repeat() would be a method!