////////////////////////////////////////////////////////////////////
// Date Completed 05-07-23
// KYU 6


////////////////////////////////////////////////////////////////////
// Prompt
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

///////////////////////////////////////////////////////////////////
// My Solution
function findUniq(arr) {
    let counts = {};
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      counts[num] = (counts[num] || 0) + 1;
    }
    
    for (let num in counts) {
      if (counts[num] === 1) {
        return Number(num);
      }
    }
  }

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function findUniq(arr) {
//     return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
//   }

// function findUniq(arr) {
//     arr.sort((a,b)=>a-b);
//     return arr[0]==arr[1]?arr.pop():arr[0]
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// This one had A LOT of unique solutions and I loved how so many people solved it. I made an object and then looped over it, which I had to review.