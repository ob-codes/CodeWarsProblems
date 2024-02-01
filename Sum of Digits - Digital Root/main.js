/*
1. Parameter: number
2. Return: number
3. Example: 456 -> 4+5+6 -> 15 -> 1+5 => 6
4. Pseudo-code:
  a. Find the sum of all digits
  b. If the sum is 2 or more digit value, repeat a
  c. If the sum is 1 digit value, return the sum as Number
*/
//codewars (6Kyu)
function digitalRoot(params) {  
  temp = params
        .toString()
        .split("")
        .reduce((acc, c) => acc + (+c), 0)
        .toString();
  
  if (params.length <= 1)
    return Number(temp);

  return digitalRoot(temp);
}

console.log(digitalRoot(16));//7
console.log(digitalRoot(456));//6
console.log(digitalRoot(567));//9
console.log(digitalRoot(132189));//6