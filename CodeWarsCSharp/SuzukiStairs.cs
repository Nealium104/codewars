using System;
public class Kata
{
  public static long StairsIn20(int[][] stairs)
  {
  long sum = 0;
        foreach (int[] item in stairs)
        {
          foreach (int num in item)
          {
            sum += num;
          }
        }
    long result = sum * 20;
    return result;
  }
}