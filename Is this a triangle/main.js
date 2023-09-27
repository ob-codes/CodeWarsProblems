function isTriangle(a,b,c)
{  
  if (a < 0 || b < 0 || c < 0)
    return false;
  if ((a+b > c) && (a+c > b) && (b+c > a))
    return true;
  
  return false;
}

console.log(isTriangle(1,2,2)); //true
console.log(isTriangle(7,2,2)); //false