////////////////////////////////////////////////////////////////////
// Date Completed 06-02-23
// KYU 6


////////////////////////////////////////////////////////////////////
// Prompt
// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

//     sz is <= 0 or if str is empty return ""
//     sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

// Examples:

// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"

// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".



///////////////////////////////////////////////////////////////////
// My Solution
function revrot(str, sz) {
    if (sz <= 0 || str == "" || sz > str.length) return "";

    let chunks = [];

    for (let i = 0; i < str.length; i += sz) {
        let chunk = str.substr(i, sz);

        if (chunk.length == sz) {
            chunks.push(chunk);
        }
    }

    // Process chunks
    for (let i = 0; i < chunks.length; i++) {
        let chunk = chunks[i];
        let sum = 0;

        // Calculate the sum of cubes of digits
        for (let j = 0; j < chunk.length; j++) {
            sum += Math.pow(chunk[j], 3);
        }
        if (sum % 2 == 0) {
            chunks[i] = chunk.split("").reverse().join("");
        } else {
            chunks[i] = chunk.slice(1) + chunk[0];
        }
    }
    return chunks.join("");
}


////////////////////////////////////////////////////////////////////
// Favorite Solution
// function revrot(str, sz) {
//     if (sz <= 0 || !str || sz > str.length) return '';    
      
//     const sumCubes = chunk => chunk.split('').reduce((sum, digit) => sum += digit**3, 0);
//     const reverse = chunk => chunk.split('').reverse().join('');
//     const rotate = chunk => chunk.slice(1) + chunk.slice(0, 1);
    
//     const chunks = [];
    
//     for (let i = 0; i < str.length; i += sz) {
//       let chunk = str.slice(i, i + sz);
      
//       if (chunk.length < sz) continue;
      
//       chunk = sumCubes(chunk) % 2 
//         ? rotate(chunk)   
//         : reverse(chunk);
      
//       chunks.push(chunk)
//     }
    
//     return chunks.join('')
// }

////////////////////////////////////////////////////////////////////
// What I learned
// This was a stretch for me. Doing sort of "not standard" things with loops always bends my brain a little bit.