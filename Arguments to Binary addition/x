function arr2bin(arr) {
  let sum = arr.reduce((acc, c) => typeof(c) == "number" ? acc + c : acc, 0);

  return sum.toString(2);
}

console.log(arr2bin([1,2])); //'11'
console.log(arr2bin([1,2,'a'])); //'11'
console.log(arr2bin([])); //'0'