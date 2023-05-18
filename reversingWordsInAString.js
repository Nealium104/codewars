////////////////////////////////////////////////////////////////////
// Date Completed 05-18-23
// KYU 8


////////////////////////////////////////////////////////////////////
// Prompt
// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

// Happy coding!


///////////////////////////////////////////////////////////////////
// My Solution
const reverse = string => string.split(' ').reverse().join(' ')

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function reverse(string){
//     // validate input
//     if (typeof(string) !== 'string') throw new Error('reverse: parameter is not a string!');
//     // just use the dumb way out since it's jabbascripps
//     return string.split(' ').reverse().join(' ');
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// Not much, although I liked the validation of the favorite example.