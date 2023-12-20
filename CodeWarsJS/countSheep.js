////////////////////////////////////////////////////////////////////
// Date Completed 02-16-23
// KYU 8

////////////////////////////////////////////////////////////////////
// Prompt
// If you can't sleep, just count sheep!!
// Task:

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// /////////////////////////////////////////////////////////////////
// My Solution
const countSheep = (num) => {
  let dream = ``;
  for (let i = 1; i <= num; i++) {
    dream = dream.concat(`${i} sheep...`);
  }
  return dream;
};

////////////////////////////////////////////////////////////////////
// Favorite Solution
// countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``

////////////////////////////////////////////////////////////////////
// What I learned
// I ended up using the same logic as my empty array to realize that I need to declare a variable to store what will eventually get information. I vaguely remembered the .concat method, so I got more practice with that.
// The main thing I learned was that I need to be careful about where I put my return statement. I put it in the for loop at first, which would obviously only return the first sheep every time it was ran.
// I put the dream return at the end to get the result of the full loop.
