using System;

public static class Game
{
  public static float Combat(float health, float damage)
  {
  return (health >= damage) ? health - damage : 0;
  }
}