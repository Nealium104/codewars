////////////////////////////////////////////////////////////////////
// Date Completed 03-11-23
// KYU 7 


////////////////////////////////////////////////////////////////////
// Prompt
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

// Note: keep the original order of the names in the output.



///////////////////////////////////////////////////////////////////
// My Solution
friend = friends => friends.filter(friend => friend.length === 4)

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function friend(friends){
//     //your code here
//     var realFriends = [];
//     for(i=0; i<friends.length; i++){
//       if(friends[i].length == 4 && isNaN(friends[i])){
//         realFriends.push(friends[i]);
//       }
//     }
    
//     return realFriends
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// The favored solution is the one I was going to attempt until I realized that I now know the filter method! Just through working with it, I realized that the filter method
// is essentially a built in conditional for every item in an array. I sort of knew that, but it feels more concrete now