////////////////////////////////////////////////////////////////////
// Date Completed 02-19-23
// KYU 8 

////////////////////////////////////////////////////////////////////
// Prompt
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.


// /////////////////////////////////////////////////////////////////
// My Solution
function squareSum(numbers){
    return numbers.reduce((accumulator, initialValue) => {
        return accumulator + Math.pow(initialValue, 2)
    },0)
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function squareSum(numbers){
//   return numbers.reduce((sum,num) => sum + (num * num), 0);
// }

////////////////////////////////////////////////////////////////////
// What I learned
// I've struggled with .reduce for a while. I think I fully understand, now. This seems like a straightforward
// example of the method. I'll probably need to practice this one a few times.