/*
1. Parameter: number
2. Return: boolean
3. Example: 5 -> true, 9 -> false, 11 -> true
4. Pseudo-code:
  a. return false for input < 2
  b. check the divisor of input from 2 to sqrt(input)
  c. if exact divisor exist (i.e. remainder 0), return true otherwise false
*/
//codewars (6Kyu)
function isPrime(inp) {
  if (inp <= 1) 
    return false;

  return true;
}

console.log(isPrime(1)); /* false */
console.log(isPrime(2)); /* true  */
console.log(isPrime(5)); /* true  */
console.log(isPrime(10)); /* false  */
console.log(isPrime(11)); /* true  */
console.log(isPrime(-1)); /* false */
