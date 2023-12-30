////////////////////////////////////////////////////////////////////
// Date Completed 12-21-2023
// KYU 8
// Lang C#

////////////////////////////////////////////////////////////////////
// Prompt
// Task:

// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Divison by zero should throw a DivideByZeroException.
// Examples:

// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)

// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)

///////////////////////////////////////////////////////////////////
// My Solution
using System;

public class FindTheRemainder
{
    public static int Remainder(int a, int b)
    {
        int larger = Math.Max(a, b);
        int smaller = Math.Min(a, b);

        if (smaller == 0)
        {
            throw new DivideByZeroException("Cannot divide by zero");
        }

        return larger % smaller;
    }
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// using System;

public class FindTheRemainderFavoriteSolution
{
  public static int Remainder(int a, int b) =>
    a > b ? a % b : b % a;
}

////////////////////////////////////////////////////////////////////
// What I learned
// I learned you can't have conditionals directly in the switch statement in C#.