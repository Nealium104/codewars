////////////////////////////////////////////////////////////////////
// Date Completed 04-22-23
// KYU 7

////////////////////////////////////////////////////////////////////
// Prompt
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

///////////////////////////////////////////////////////////////////
// My Solution
function DNAStrand(dna) {
  dna = dna.split("");
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      dna[i] = "T";
    } else if (dna[i] === "T") {
      dna[i] = "A";
    } else if (dna[i] === "C") {
      dna[i] = "G";
    } else {
      dna[i] = "C";
    }
  }
  return dna.join("");
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function DNAStrand(dna) {
//     return dna.replace(/./g, function(c) {
//       return DNAStrand.pairs[c]
//     })
//   }

//   DNAStrand.pairs = {
//     A: 'T',
//     T: 'A',
//     C: 'G',
//     G: 'C',
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// I think I should learn regular expressions. I see them so often in coding challenges. Anyway, I need to get it through my
// brain that strings are IMMUTABLE. I did this challenge with my code minus the .split and .join and was frustrated for way
// too long.
