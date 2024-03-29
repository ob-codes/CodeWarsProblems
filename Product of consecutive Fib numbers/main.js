/*
- Parameter: number
- Return: array
- Example: 714 => [ 21, 34 ] -> true
- Pseudo-code:
  a. Generate two elements of fabionacci series
  b. Check if product of these two elements >= input
  c. If not, generate next two elements until 'b' satisfies
  d. If product and input are equal, return true otherwise false
*/

//codewars (5Kyu)
function productFib(num) {
  let result = [];
  let fib = [0, 1];

  while (!(fib[0] * fib[1] >=num)) {
    fib[1] = fib[1] + fib[0];
    fib[0] = fib[1] - fib[0];
  }

  let temp = fib[0] * fib[1];
  if(num === temp) {
    result.push(fib[0], fib[1], true);
  }
  else if (temp > num) {
    result.push(fib[0], fib[1], false);
  }
  
  return result;
}

console.log(productFib(714)); //[ 21, 34, true ]
console.log(productFib(800)); //[ 34, 55, false ]