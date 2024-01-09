/*
1. Paramter: string
2. Return: string
3. Example: "3abc" -->  "aaabbbccc", 3D2a5d2f" -->  "DDDaadddddff"
4. Pseudo-code:
  a. Check for occurence of a number in input string and call it num
  b. For every char that appear after num, repeat the char num times 
*/

function stringExpansion(params) {
  let result="", isPrevNumber = false, num=1;
  paramsArr = params.split("");
  

  return result;
}
console.log(stringExpansion("3D2a5d2f"));//-->  "DDDaadddddff"
console.log(stringExpansion("3abc"));//-->  "aaabbbccc" 
console.log(stringExpansion("abcde"));//-->  "abcde" 