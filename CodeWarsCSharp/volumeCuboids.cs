using System;
using System.Linq;

public class volumeCuboids
{
  public static int FindDifference(int[] a, int[] b)
  {
    int volumeA = a.Aggregate(1, (total, next) => total * next);
    int volumeB = b.Aggregate(1, (total, next) => total * next);
    return Math.Abs(volumeA - volumeB);
  }
}