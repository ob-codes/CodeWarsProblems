/*
1. Parameter:array of chars
2. Return: boolean
3. Example:["5", "2", "C", "D", "+"] => 30
4. Pseudo-code:
  a. Take input array and check value of each char
  b. If value is 0-9, keep it as it is
  c. If value is 'C', discard last value
  d. If value if 'D', double the last value
  e. If value if '+', take the sum of last two values
  f. Find the sum of all values
*/
function name(ops) {
    var result = null, temp=[];
    
    for (let i=0;i<ops.length;i++){
      if (ops[i] >= '0' && ops[i] <= '9')
        temp.push(ops[i]);
      else if (ops[i] === 'D')
        temp.push(2 * temp[temp.length -1]);
      else if (ops[i] === 'C')
        temp.pop();
      else if (ops[i] === '+')
        temp.push(Number(temp[temp.length -1]) + Number(temp[temp.length -2]));
    }
    result = temp.reduce((acc, c) => acc + (+c), 0);

    return result;
}

console.log(name(["5", "2", "C", "D", "+"])) //30