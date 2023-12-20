////////////////////////////////////////////////////////////////////
// Date Completed 09-02-23
// KYU 8

////////////////////////////////////////////////////////////////////
// Prompt
// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: side will be an integer

///////////////////////////////////////////////////////////////////
// My Solution
const cubeChecker = (volume, side) => {
  if (volume <= 0 || side <= 0) {
    return false;
  } else if (volume === Math.pow(side, 3)) {
    return true;
  } else {
    return false;
  }
};

////////////////////////////////////////////////////////////////////
// Favorite Solution
// var cubeChecker = function(volume, side){
//     return Math.pow(side, 3) === volume && side > 0;
//   };

////////////////////////////////////////////////////////////////////
// What I learned
// I should be thinking about edge cases from the beginning. I also like when I find a solution that
// is structured differently than mine to be more concise.
