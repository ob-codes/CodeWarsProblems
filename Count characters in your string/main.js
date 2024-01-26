/*
- Parameter: str
- Return: Object
- Example: "aba" => {'a': 2, 'b': 1}
- Pseudo-code:
  a. Compare every element of array with the remaining elements
  b. If match found, remove the element and increase counter by 1
  c. Insert element-counter as key-value pair in result object
  d. Return result object
*/
//codewars (6Kyu)
function count(str) {
  let result = {}, counter=0;
  let arr = str.split("");
  
  return result;
}

console.log(count("aba"));//{'a': 2, 'b': 1}
console.log(count('a'));//{'a': 1}
console.log(count("ABC"));//{'A': 2, 'B': 1, 'C': 1}