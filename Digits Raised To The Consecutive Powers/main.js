/*
- Parameter: number range
- Return: array of eurekas
- Example: 89 -> 8^1+9^2 -> 89 => eureka
- Pseudo-code:
  a. Check status of each value in the input range
  b. If the value is single digit, its eureka
  c. If value is 2-digits or more, calculate the raised sum of its digits
  d. If the raised sum equal to actual value, its eureka
  e. Push eureka numbers to result array
*/
//codewars (6Kyu)
function raisedSum(a, b) {
  let result=[], temp=0;

  for (let i = a; i < b; i++) {
    if (i < 10) {
      result.push(i);
    } 
    else {
      i.toString().split("").map((el, idx) => {
        temp += Math.pow(Number(el), idx+1);
      });

      if (i === temp) {
        result.push(i);
      }
      temp = 0;
    }    
  }
 
  return result;
}

console.log(raisedSum(90, 100));// --> []
console.log(raisedSum(1, 100));// --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]