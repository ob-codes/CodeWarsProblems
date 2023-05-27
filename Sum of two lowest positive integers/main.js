function sumTwoSmallestNumbers(numbers) {  
  let res = 0;

  numbers.sort((a, b) => a-b);
  res = numbers[0] + numbers[1];

  return res;
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));