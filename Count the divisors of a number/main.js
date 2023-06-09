function getDivisorsCnt(n){
  let res = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0)
      res++;
  }

  return res;
}

console.log(getDivisorsCnt(10));
console.log(getDivisorsCnt(54));