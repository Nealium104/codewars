////////////////////////////////////////////////////////////////////
// Date Completed 05-30-23
// KYU 6


////////////////////////////////////////////////////////////////////
// Prompt
// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.

///////////////////////////////////////////////////////////////////
// My Solution
function expandedForm(num) {
    num = num.toString().split('')
    let expandedForm = []
    let digits = num.length
    for(let i = 0; i < num.length; i++){
        if(num[i]*Math.pow(10, (digits-i-1)) > 0){
            expandedForm.push(num[i]*Math.pow(10, (digits-i-1)))
        }
    }
    return expandedForm.join(' + ').toString()
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");

////////////////////////////////////////////////////////////////////
// What I learned
// Now this was a challenge that I was ready for. I'm not sure if I've ever needed to push within a loop before.