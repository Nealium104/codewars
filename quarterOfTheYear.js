////////////////////////////////////////////////////////////////////
// Date Completed 09-08-23
// KYU 8

////////////////////////////////////////////////////////////////////
// Prompt
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

//     1 <= month <= 12

///////////////////////////////////////////////////////////////////
// My Solution
const quarterOf = (month) => {
  if (month > 9) return 4;
  else if (month > 6) return 3;
  else if (month > 3) return 2;
  else return 1;
};

////////////////////////////////////////////////////////////////////
// Favorite Solution
// const quarterOf = m => Math.ceil(m/3);

////////////////////////////////////////////////////////////////////
// What I learned
// Love the favorite. I was trying to figure out like a way to use % and just decided to do it the easy way.
