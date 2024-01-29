function largestPairSum(numbers) {
  let max = Math.max(...numbers);
  const newNumbers = numbers.splice(numbers.indexOf(Math.max(...numbers)), 1);
  let secondMax = Math.max(...numbers);
  return max + secondMax;
}
