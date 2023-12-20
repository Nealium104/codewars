////////////////////////////////////////////////////////////////////
// Date Completed 04-11-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

///////////////////////////////////////////////////////////////////
// My Solution
const removeUrlAnchor = url => url.split("#")[0]

////////////////////////////////////////////////////////////////////
// Favorite Solution
// const removeUrlAnchor = url => url.split("#")[0]

////////////////////////////////////////////////////////////////////
// What I learned
// This was a pretty easy one. I kinda guessed that the array selector would work. First time I didn't really like
// any of the other solutions more than mine.