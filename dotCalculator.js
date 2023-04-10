////////////////////////////////////////////////////////////////////
// Date Completed 04-10-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// Dot Calculator

// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

//     + Addition
//     - Subtraction
//     * Multiplication
//     // Integer Division

// Your Work (Task)

// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.
// Examples (Input => Output)

// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""



///////////////////////////////////////////////////////////////////
// My Solution
function dotCalculator (equation) {
    let eqSplit = equation.split(" ")
    let num1 = eqSplit[0].length
    let num2 = eqSplit[2].length
    let operator = eqSplit[1]
  
    if(operator == "+"){
        return ".".repeat(num1 + num2)
    } else if (operator == "-"){
        return ".".repeat(num1 - num2)
    } else if (operator == "*"){
        return ".".repeat(num1 * num2)
    } else {
        return ".".repeat(num1 / num2)
    }
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// const dotCalculator = (equation) => {
//     const operations = {
//       '+' : (a, b) => a + b,
//       '-' : (a, b) => a - b,
//       '*' : (a, b) => a * b,
//       '//': (a, b) => a / b,
//     };
//     const [left, operator, right] = equation.split(' ');
//     return '.'.repeat(operations[operator](left.length, right.length));
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// Really like the object oriented approach of the favorite solution. I learned about the repeat method, which hasn't been useful until now, but it's going into the anki. 
// I think this one would've been a good one to practice abstraction with. Idk if it's standard practice, but I decided to name each part of my code pretty explicitly. Makes
// it easier to read, but it seems like wasted space.