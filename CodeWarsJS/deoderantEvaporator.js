////////////////////////////////////////////////////////////////////
// Date Completed 08-17-23
// KYU 7

////////////////////////////////////////////////////////////////////
// Prompt
// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.
// Example:

// evaporator(10, 10, 5) -> 29

// Note:

// Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.

///////////////////////////////////////////////////////////////////
// My Solution
function evaporator(content, evap_per_day, threshold) {
  let leftover = 100;
  evap_per_day /= 100;
  let day = 0;

  for (day = 0; leftover > threshold; day++) {
    leftover = leftover - leftover * evap_per_day;
  }
  return day;
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
function evaporator(content, evap_per_day, threshold) {
  var current = 100;
  var day = 0;
  while (current >= threshold) {
    current -= (current * evap_per_day) / 100;
    day++;
  }
  return day;
}

////////////////////////////////////////////////////////////////////
// What I learned
// This one felt like a math gotcha. I like the favorite using a while loop, as that's what I started with.
