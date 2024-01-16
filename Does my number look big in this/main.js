/*
1. Parameter: number
2. Return: boolean
3. Example: 153 -> 1^3+5^3+3^3=1+125+27 -> 153 => true, 1652 -> 1^4+6^4+5^4+2^4 -> 1+1296+625+16 -> 1938 => false
4. Pseudo-code:
  a. Count the total num of digits in input value
  b. Raise each digit to the power of total digits
  c. Take the sum of all values in step-b
  d. If sum in step-c is equal to input value, input is narcissist
*/
//codewars (6Kyu)
function narcissistic(params) {
  let result = false, temp=0;
  let arr = params.toString().split("");
  let len = params.toString().length;

  return result;
}

console.log(narcissistic(153));//true
console.log(narcissistic(1652));//false
console.log(narcissistic(7));//true
console.log(narcissistic(122));//false
console.log(narcissistic(487));//false