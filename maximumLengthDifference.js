////////////////////////////////////////////////////////////////////
// Date Completed 06-17-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
// Example:

// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

// Bash note:

//     input : 2 strings with substrings separated by ,
//     output: number as a string



///////////////////////////////////////////////////////////////////
// My Solution
function mxdiflg(a1, a2) {
    if(a1.length === 0 || a2.length === 0) {
        return -1;
    }

    let max1 = Math.max(...a1.map(a => a.length));
    let min1 = Math.min(...a1.map(a => a.length));

    let max2 = Math.max(...a2.map(a => a.length));
    let min2 = Math.min(...a2.map(a => a.length));

    return Math.max(Math.abs(max1 - min2), Math.abs(max2 - min1));
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function mxdiflg(a1, a2) {
//     if(!a1.length||!a2.length)return -1;
//     a1.sort((a,b)=>a.length-b.length);
//     a2.sort((a,b)=>a.length-b.length)
//     return Math.max(Math.abs(a1[0].length-a2[a2.length-1].length),Math.abs(a2[0].length-a1[a1.length-1].length));
// }

////////////////////////////////////////////////////////////////////
// What I learned
// I remembered from last time I had a description that made no sense to just look in the discussion. When in doubt, ask questions!