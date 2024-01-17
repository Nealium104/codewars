// create a function that will return the indices of the word that contain a vowel.
// in this function, a vowel is aeiou or y

function vowelIndices(word){
  let indexArray = [];
  word = word.toLowerCase().split("");
  for(let i = 0; i < word.length; i++){
    if(word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u" || word[i] == "y"){  
    indexArray.push(i + 1)
    }  
  }
  return indexArray
}