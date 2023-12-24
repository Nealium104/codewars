using System.Collections.Generic;
using System.Linq;

public class Fixer
{
  public static List<int> PipeFix(List<int> numbers)
  {
    var NewList = new List<int>();
    for(int i = numbers[0]; i <= numbers.Last(); i++)
    {
     NewList.Add(i);
    }  
    return NewList;
  }
}
Tried to do it by comparing each number to the numbers around it to judge, but I re-read the question and realized I could solve just by looking at the outer numbers instead! Also had to review how Lists work. I kept forgetting the (), but we need that because we’re calling the constructor (which is a function) for List when we make a new list, hence the ().