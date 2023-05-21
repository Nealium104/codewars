////////////////////////////////////////////////////////////////////
// Date Completed 05-21-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

///////////////////////////////////////////////////////////////////
// My Solution
function accum(s) {
    return s.split('').map((c, i) => {
        let transformedChar = c.toUpperCase() + c.toLowerCase().repeat(i);
        return transformedChar;
    }).join('-');
}

////////////////////////////////////////////////////////////////////
// Favorite Solution


////////////////////////////////////////////////////////////////////
// What I learned
// Good practice with .map. I need more practice with that method.