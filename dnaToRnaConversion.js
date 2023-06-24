////////////////////////////////////////////////////////////////////
// Date Completed 06-24-23
// KYU 8


////////////////////////////////////////////////////////////////////
// Prompt
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"

// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.


///////////////////////////////////////////////////////////////////
// My Solution
const DNAtoRNA = dna => dna.replace(/T/g, 'U')


////////////////////////////////////////////////////////////////////
// Favorite Solution
// function DNAtoRNA(dna) {
//     return dna.split("T").join("U");
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// I actually made two solutions. One, I learned that replace will only work on the first
// instance of the match. But there's a different method called .replaceAll() that will
// replace everything instead. But, since it was so easy, I decided to review my regex with it.
// The favorite solution is so clever, I love it.