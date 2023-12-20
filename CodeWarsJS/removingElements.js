////////////////////////////////////////////////////////////////////
// Date Completed 03-09-23
// KYU 8


////////////////////////////////////////////////////////////////////
// Prompt
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!


///////////////////////////////////////////////////////////////////
// My Solution
function removeEveryOther(arr) {
    const result = arr.filter((arrItem, index) => index % 2 === 0);
    return result;
    }

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function removeEveryOther(arr){
//     var newArr=[];
//   for (var i = 0; i < arr.length; i+=2){
//     newArr.push(arr[i]);
//     }
//   return newArr;

////////////////////////////////////////////////////////////////////
// What I learned
// Oh boy, a lot. I was originally going with the plan of the second solution, but I thought it would be much easier with the filter method.
// It kind of was, but I tried to figure out how to use indexOf to get the index of each item of the array to I could just do the comparison
// operator. It didn't really work because I forgot about the index until I looked it up on mdn. I need to just follow through with solutions
// instead of half-trying a bunch of solutions.