////////////////////////////////////////////////////////////////////
// Date Completed 03-10-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.
// Examples (input --> output)

// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.


///////////////////////////////////////////////////////////////////
// My Solution
function getDivisorsCnt(n){
    let arr =[];
     for(i=0; i<= n; i++) {
      if( n % i === 0 ){ 
        arr.push(i) 
     }
    } return arr.length;
  }

////////////////////////////////////////////////////////////////////
// Favorite Solution
// const getDivisorsCnt = n =>
//   [...Array(n / 2 ^ 0)].reduce((pre, _, idx) => n % ++idx ? pre : ++pre, 1);

////////////////////////////////////////////////////////////////////
// What I learned
// I did this one without peeking at any documentation! For loops are my favorite. I feel like I have a really good grasp on arrays.