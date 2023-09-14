function digitize(n) {
  let result = [];
  if (n===0)
    result.push(0);
  while (n >= 1)
  {
    result.push(parseInt(n%10));
    n=n/10;
  }
  return result;
}

console.log(digitize(35231)); //[1,2,3,5,3]