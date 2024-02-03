// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/csharp

using System;

namespace Solution
{
  public static class Program
  {
    public static ulong Factorial(int n)
    {
      ulong accumulator = 1;
      for(int i = 1; i <= n; i++)
      {
        accumulator *= (ulong)i;
      }
      return accumulator;
    }
  }
}