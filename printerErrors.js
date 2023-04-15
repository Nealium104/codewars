////////////////////////////////////////////////////////////////////
// Date Completed 04-15-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.
// Examples:

// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"



///////////////////////////////////////////////////////////////////
// My Solution
function printerError(s) {
    let errors = 0
    for(let i=0; i < s.length; i++){
    if(s[i].includes('n') ||
        s[i].includes('o') ||
        s[i].includes('p') ||
        s[i].includes('q') ||
        s[i].includes('r') ||
        s[i].includes('s') ||
        s[i].includes('t') ||
        s[i].includes('u') ||
        s[i].includes('v') ||
        s[i].includes('w') ||
        s[i].includes('x') ||
        s[i].includes('y') ||
        s[i].includes('z')){
        errors++
        }
    }
    return errors + '/' + s.length
  }

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function printerError(s) {
//     // your code
//     var count = 0;
//     for(var i = 0; i < s.length; i++) {
//       if (s[i] > "m") {
//         count++;
//       }
//     }
//     return count+"/"+s.length;
// }

////////////////////////////////////////////////////////////////////
// What I learned
// I didn't learn this until after while trying to figure out the other solutions, but you can actually compare letters by themselves! Apparently, characters
// are encoded as unicode values, so you can compare using > < or whatever just like you would a number. Neat!