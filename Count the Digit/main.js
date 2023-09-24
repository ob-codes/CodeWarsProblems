function nbDig(n, d) {
  let result = 0, temp = [];
  
  for (let k = 0; k <= n; k++) {
    temp.push(k*k);
  }

  temp.forEach(el => {
    while (el.toString().includes(d)) {
      result++;
      el = parseInt(el / 10);
    }      
  });   

  return result;
}

console.log(nbDig(10, 1)); //
console.log(nbDig(25, 1)); //
console.log(nbDig(5750, 0)); //