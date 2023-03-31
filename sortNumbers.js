////////////////////////////////////////////////////////////////////
// Date Completed 03-30-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []


///////////////////////////////////////////////////////////////////
// My Solution
const solution = nums => {
    const compareNumbers = (a,b) => { return a-b }
    
    if(nums === null){
      return []
    } else {
      return nums.sort(compareNumbers)
    }
  }

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function solution(nums){
//     return (nums || []).sort(function(a, b){
//       return a - b
//     });
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// I just had the .sort() extra bit memorized, but I didn't realize you can wholesale plug that extra bit as a parameter. Other than that, I was 
// just reminded that I can sometimes "read between the lines" in these. For a while, I was trying to get it to check the type of the input,
// which would probably be a little more robust, but I didn't need to go through that much effort; the problem only specified null.