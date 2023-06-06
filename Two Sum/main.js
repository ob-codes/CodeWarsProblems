function twoSum(numbers, target) {
  let res = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i+1; j < numbers.length; j++)
      if (target === numbers[i] + numbers[j])
        res = [i, j]
  }

  return res;
}

console.log(twoSum([1,2,3], 4));
console.log(twoSum([1234,5678,9012], 14690));