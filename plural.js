////////////////////////////////////////////////////////////////////
// Date Completed 05-28-23
// KYU 8


////////////////////////////////////////////////////////////////////
// Prompt
// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

//     You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.


///////////////////////////////////////////////////////////////////
// My Solution
const plural = n => n !== 1

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function PluralNecessityVerifier(number){
  
// }

// PluralNecessityVerifier.prototype.verifyPotentialNeedOfPluralization = function(number){
//   const numberIsNotPotentiallyBuggyData = number !== 'Potentially Buggy Data';
//   const numberIsReallyANumberAndNotAnIntruderDataType = typeof number === 'number';
//   const numberIsNotNotANumber = !isNaN(number);
//   const numberOfAbstractElementsDoesntEqualsOne = number !== 1;
//   if(
//     (numberIsNotPotentiallyBuggyData) &&
//     (numberIsReallyANumberAndNotAnIntruderDataType) &&
//     (numberIsNotNotANumber) &&
//     (numberOfAbstractElementsDoesntEqualsOne)
//   ){
//     return "It's true that the sentence needs pluralization";
//   }
//   return ''
// }

// function plural(n) {
//   const pluralNecessityVerifierWorker = new PluralNecessityVerifier();
//   return !!pluralNecessityVerifierWorker.verifyPotentialNeedOfPluralization(n);
// }

////////////////////////////////////////////////////////////////////
// What I learned
// That long, over-complicated solutions are funny, and not useful whatsoever.