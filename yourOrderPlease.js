////////////////////////////////////////////////////////////////////
// Date Completed 04-26-23
// KYU 6


////////////////////////////////////////////////////////////////////
// Prompt
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""



///////////////////////////////////////////////////////////////////
// My Solution
function order(words) {
    let arr = words.split(' ');
    let retArr = new Array(arr.length);
    
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
      
      for (let j = 1; j <= arr.length; j++) {
        if (word.includes(j.toString())) {
          retArr[j - 1] = word;
          break;
        }
      }
    }
    return retArr.join(' ');
  }

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function order(words){
  
//     return words.split(' ').sort(function(a, b){
//         return a.match(/\d/) - b.match(/\d/);
//      }).join(' ');
//   } 

////////////////////////////////////////////////////////////////////
// What I learned
// Nested loops are awesome and I need to work on them more. I also need to learn the .sort method because that seems like it would've made this easier.