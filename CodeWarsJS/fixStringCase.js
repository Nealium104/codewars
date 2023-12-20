////////////////////////////////////////////////////////////////////
// Date Completed 08-01-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

// More examples in test cases. Good luck!

///////////////////////////////////////////////////////////////////
// My Solution
function solve(s){
    let arr = s.split('')
    let upperCount = 0
    let lowerCount = 0
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === arr[i].toUpperCase()){
         upperCount++
         } else {
        lowerCount++
      }
    }
    if(upperCount > lowerCount){
      return s.toUpperCase()
    } else {
      return s.toLowerCase()
    }
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()

////////////////////////////////////////////////////////////////////
// What I learned
// This one was good. Love the favorite solution