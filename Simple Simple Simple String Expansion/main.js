/* 
1. Paramter: string
2. Return: string
3. Example: "3abc" -->  "aaabbbccc", 3D2a5d2f" -->  "DDDaadddddff"
4. Pseudo-code:
  a. Check for occurence of a number in input string and call it num
  b. For every char that appear after num, repeat the char num times 
*/
//codewars 6Kyu
function stringExpansion(params) {
  let result="", isPrevNumber = false, num=1;
  paramsArr = params.split("");
  
  for (let i = 0; i < paramsArr.length; i++) {    
    let temp = Number(paramsArr[i]);
    if (temp >= 0 && temp<=9) {
      isPrevNumber = true;
      num = temp;
    }
    else {      
      for (let j = 0; j < num; j++) {
        result += paramsArr[i];
      }
    }
  }

  return result;
}
console.log(stringExpansion("3D2a5d2f"));//-->  "DDDaadddddff"
console.log(stringExpansion("3abc"));//-->  "aaabbbccc" 
console.log(stringExpansion("abcde"));//-->  "abcde" 