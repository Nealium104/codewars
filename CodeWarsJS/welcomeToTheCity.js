////////////////////////////////////////////////////////////////////
// Date Completed 09-01-23
// KYU 8

////////////////////////////////////////////////////////////////////
// Prompt
// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'

// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

///////////////////////////////////////////////////////////////////
// My Solution
function sayHello(name, city, state) {
  name = name.reduce((acc, currName) => acc + " " + currName, "").trim();
  return `Hello, ${name}! Welcome to ${city}, ${state}!`;
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function sayHello( name, city, state ) {
//     return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
//     }

////////////////////////////////////////////////////////////////////
// What I learned
// Well, I felt dumb when I saw the favorite solution. I knew that. Definitely over engineered this one.
