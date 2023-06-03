function tribonacci(signature, n){
  let res = [];
  
  for (let i = 0; i < n; i++) {
    if(i < 3)
      res.push(signature[i])
    else if(i >=3)
      res.push(res[i-1]+res[i-2]+res[i-3]);
  }
  return res;
}

console.log(tribonacci([1,1,1], 10));
console.log(tribonacci([1,1,1], 1));
console.log(tribonacci([300,200,100], 0));