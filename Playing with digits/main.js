function digPow(n, p){
  let arr = "";
  arr =  n.toString().split("");
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum +=  Math.pow(Number(arr[i]), p+i);    
  }
  if (sum % n === 0)
    return sum/n;
  else
    return -1;
}

console.log(digPow(89, 1));
console.log(digPow(89, 1));
console.log(digPow(89, 1));