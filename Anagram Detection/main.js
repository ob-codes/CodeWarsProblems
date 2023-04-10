// write the function isAnagram
var isAnagram = function(test, original) {
  let result = false;

  let testArr = test.toLowerCase().split("").sort().join("");
  let orgArr = original.toLowerCase().split("").sort().join("");

  if (testArr === orgArr)
    result = true;

  return result;
};

console.log(isAnagram("foefet", "toffee")); //true
console.log(isAnagram("apple", "pale")); //false