public class mostDigits
{
  public static int FindLongest(int[] number)
  {
    int highest = number[0];
    foreach(int num in number)
    {
     if(num.ToString().Length > highest.ToString().Length)
     {
      highest = num;
     }
    }
    return highest;
  }
}