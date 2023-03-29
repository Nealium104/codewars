////////////////////////////////////////////////////////////////////
// Date Completed 03-29-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

///////////////////////////////////////////////////////////////////
// My Solution
function XO(str) {
    let xCount = 0;
    let oCount = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (char === 'x') {
            xCount++;
        } else if (char === 'o') {
            oCount++;
        }
    }

    return xCount === oCount;
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function XO(str) {
//     var a = str.replace(/x/gi, ''),
//         b = str.replace(/o/gi, '');
//     return a.length === b.length;
// }

////////////////////////////////////////////////////////////////////
// What I learned
// Always reread the examples a few times and mentally walk through them. I initially thought I needed to count the different
// characters, but it's literally just that there could be extra characters in the problem. This one was fairly easy.
// I'm also learning that the KYU system on CodeWars is kind of bunk. At least for 8's and 7's, the difficulty can be
// all over the place. I've done 8's that are WAY harder than this.