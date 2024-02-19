/*
- Parameter: starting value, total number of values
- Return : array of numbers
- Example: 2, 5 -> [2,4,16,256,65536]
- Pseudo-code:
  a. Check if the total required values are non-zero
  b. Insert the starting number (x) as first value in result array
  c. Take the square of previous value and insert in the result array
  d. Repeat c until the total values in result array matches the required number
*/
function squares(x, n) {
  let result = [];
  
  if (n>0)
    result.push(x);

  for (let i = 1; i < n; i++) {
    result.push(result[i-1]*result[i-1]);    
  }

  return result;
}

console.log(squares(2,5));  //[2,4,16,256,65536]
console.log(squares(3,3));  //[3,9,81]
console.log(squares(5,3));  //[5,25,625]
console.log(squares(10,4)); //[10,100,10000,100000000]