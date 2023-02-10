//Date First Completed
//02-10-23

//Prompt
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.


//My Solution
function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  }
  if (names.length === 1) {
    return names[0] + " likes this";
  }
  if (names.length === 2) {
    return names[0] + " and " + names[1] + " like this";
  }
  if (names.length === 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  }
  if (names.length >= 4) {
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
  }
    
}

//Favorite Solution
// function likes(names) {
//     return {
//       0: 'no one likes this',
//       1: `${names[0]} likes this`, 
//       2: `${names[0]} and ${names[1]} like this`, 
//       3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
//       4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
//     }[Math.min(4, names.length)]
//   }


//What I learned
//When you're concatinating with some math involved, you'll need to wrap your math in parenthesis so that it doesn't confuse your concatination with math. It'll return NaN otherwise.
//It's probably better to use template literals instead of endless if else statements for something like this. It's much more readable and you won't make as many silly spacing errors.