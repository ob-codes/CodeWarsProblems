/*
1. Parameters: string
2. Return: number
3. Example: 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667 --> 656661 => Answer(656667 - 656661)
4. Pseudo-code: 
  a. Replace char with ASCII code
  b. Make a string by combining ASCII codes
  c. Take sum of all digits in ASCII
  d. Replace number-7 with number-1 in combine ASCII, and Take sum of all digits again
  e. Calculate difference of original and modified ASCII sum
*/
function calc(params) {
  let result = 0, total1="";

  let paramsArr = params.split("");
  paramsArr.forEach(el => {
    total1 += el.charCodeAt(0);
  });
  
  //value difference of 6 is created if number-7 appears once, therefore, counter of number7 times 6 can give the answer
  counterOfValue7 = total1.split("").filter((el) => el == '7').length;
  
  result = counterOfValue7 * 6;
  
  return result;
}

console.log(calc('jaam'));//12
console.log(calc('ABC'));//6
console.log(calc('aaaaaddddr'));//30
console.log(calc('jfmgklf8hglbe')); //6