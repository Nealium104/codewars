////////////////////////////////////////////////////////////////////
// Date Completed 08-04-2023
// KYU 8


////////////////////////////////////////////////////////////////////
// Prompt
// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.


///////////////////////////////////////////////////////////////////
// My Solution
function spEng(sentence){
  return sentence.toLowerCase().includes('english')
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function spEng(s){
//    return /english/i.test(s)
// }

////////////////////////////////////////////////////////////////////
// What I learned
// Not much was learned here. Was pretty easy.