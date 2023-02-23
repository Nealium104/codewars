////////////////////////////////////////////////////////////////////
// Date Completed 02-23-23
// KYU 8 

////////////////////////////////////////////////////////////////////
// Prompt
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Example:

// n= 5, m=5: 25
// n=-5, m=5:  0


// /////////////////////////////////////////////////////////////////
// My Solution
function paperwork(n, m) {
    if(m>0 && n>0){
      return m*n
    }else{
        return 0
    }
  }

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function paperwork(n, m) {
//     return n > 0 && m > 0 ? n * m : 0
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// I have to remember to use ternary functions when possible!