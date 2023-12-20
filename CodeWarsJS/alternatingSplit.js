////////////////////////////////////////////////////////////////////
// Date Completed 07-27-23
// KYU 6


////////////////////////////////////////////////////////////////////
// Prompt
// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

///////////////////////////////////////////////////////////////////
// My Solution
function encrypt(text, n) {
    if(!text || text === '' || n <= 0){
      return text
    } else {
      
    while(n > 0){
          
      let arr = text.split('')
      let evenArr = [] 
      let oddArr = []
  
  
      for(let i = 0; i < arr.length; i++){ 
        if(i % 2 === 0){
          evenArr.push(arr[i])
        }else if(i % 2 !== 0){
          oddArr.push(arr[i])
        }
      }
      text = oddArr.join('') + evenArr.join('')
      n--
      }
    } 
    return text
  }

  function decrypt(text, n) {
    if(!text || text === '' || n <= 0) {
      return text;
    }
  
    let textLength = text.length;
    while(n > 0) {
      let firstHalf = text.slice(0, Math.floor(textLength / 2));
      let secondHalf = text.slice(Math.floor(textLength / 2));
      let decrypted = '';
      
      for (let i = 0; i < textLength; i++) {
        if (i % 2 === 0) {
          decrypted += secondHalf[i/2];
        } else {
          decrypted += firstHalf[(i-1)/2];
        }
      }
  
      text = decrypted;
      n--;
    }
  }
  
////////////////////////////////////////////////////////////////////
// Favorite Solution
// function encrypt(text, n) {
// 	for (let i = 0; i < n; i++) {
//   	text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1') 
//   }
//   return text
// }

// function decrypt(text, n) {
// 	let l = text && text.length / 2 | 0
// 	for (let i = 0; i < n; i++) {
//   	text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
//   }
//   return text
// }

////////////////////////////////////////////////////////////////////
// What I learned
// This one was really tough! Especially the decrypt.I think I came at this from the right angle. I drew out my plan before I started on the encrypt
// and basically followed my plan exactly. One thing I learned is that the modulo for < 2 still works. So 0 and 1 didn't need their own use cases.
// I also struggled for a while on how do make it happen n times and settled on a while loop, but I think it looks good!
