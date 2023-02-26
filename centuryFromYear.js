////////////////////////////////////////////////////////////////////
// Date Completed 02-26-23
// KYU 8

////////////////////////////////////////////////////////////////////
// Prompt
// Introduction

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task

// Given a year, return the century it is in.
// Examples

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here


// /////////////////////////////////////////////////////////////////
// My Solution
function century(year) {
    if (year % 100 === 0){
      return Math.floor(year / 100);
    }else{
      return Math.floor(year / 100 + 1);
    }
  }

////////////////////////////////////////////////////////////////////
// Favorite Solution
// const century = year => Math.ceil(year/100)

////////////////////////////////////////////////////////////////////
// What I learned
// Math.round() will round to the nearest integer, high or low, so consider the use case you're doing really carefully. Math.ceil is a similar method, but will only round up.