////////////////////////////////////////////////////////////////////
// Date Completed 07-20-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).


///////////////////////////////////////////////////////////////////
// My Solution
function isTriangle(a,b,c){
    let arr = [a, b, c]
    
    return arr.reduce((a, b) => a + b, 0) - Math.max(...arr) > Math.max(...arr)
  }

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function isTriangle(a,b,c){
//    return a + b > c && a + c > b && c + b > a;
// }

////////////////////////////////////////////////////////////////////
// What I learned
// So obviously mine is slower because I'm actually looping through the whole thing multiple times with reduce
// and max. The favorite solution is much better. I think I was just overthinking it. I knew I could check each
// case individually, but for some reason I felt friction doing that and I should've just done it.
