////////////////////////////////////////////////////////////////////
// Date Completed 03-31-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

// Try to do it without using if statements!


///////////////////////////////////////////////////////////////////
// My Solution
function arithmetic(a, b, operator){
  
  const operations = {
    "add": (a, b) => a + b,
    "subtract": (a, b) => a - b,
    "multiply": (a, b) => a * b,
    "divide": (a, b) => a / b,
  };
  
  function applyOperator(a, b, operator) {
    const op = operations[operator];
    return op(a, b);
  }
  
    return applyOperator(a, b, operator);
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// const arithmetic = (a, b, operator) => ({
//   'add'     : a + b,
//   'subtract': a - b,
//   'multiply': a * b,
//   'divide'  : a / b
// }[operator]);

////////////////////////////////////////////////////////////////////
// What I learned
// I could've made this much simpler. I tried using object literal notation, but couldn't figure out how to make it work like my favorite solution did. I honestly
// just went through too many steps.