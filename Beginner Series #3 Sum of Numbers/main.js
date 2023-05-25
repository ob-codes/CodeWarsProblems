function getSum(a, b)
{
  let res = 0;
  
  b > a ? (y = b, x = a) : (y = a, x = b);
  
  for(let i=x;i<=y;i++)
    res += i;
  
  return res;
}

console.log(getSum(0,-1));
console.log(getSum(0, 1));
console.log(getSum(2, 2));