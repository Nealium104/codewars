////////////////////////////////////////////////////////////////////
// Date Completed 03-03-23
// KYU 8

////////////////////////////////////////////////////////////////////
// Prompt
// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// /////////////////////////////////////////////////////////////////
// My Solution
const reverseWords = (str) => str.split(" ").reverse().join(" ");

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function reverseWords(str){
//     let count_letters= 1;
//     let new_string = "";
//     for(let i = str.length-1; i >=0 ;i--){
//       if(str[i]===' '|| i==0){
//         if(i!=0)
//           new_string+= str.substr(i+1,count_letters-1) + ' ';
//         else
//           new_string+= str.substr(i,count_letters);
//         console.log(new_string);
//         count_letters=1;
//       }else
//         count_letters++;
//     }
//     console.log(new_string);
//     return new_string;
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// This was the quickest I've ever solved a codewars