using System.Collections.Generic;

public static class MonkeyCounter
{
  public static int[] MonkeyCount(int n)
  {
    var listOfNums = new List<int>();
    
    for(int i = 1; i <= n; i++)
    {
      listOfNums.Add(i);
    }
    return listOfNums.ToArray();
  }
}