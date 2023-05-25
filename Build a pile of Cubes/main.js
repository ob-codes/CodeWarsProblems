function findNb(m) {
  let res = -1;
  let vol = 0;

  for (let i=1; i <= m;i++){
    vol += Math.pow(i, 3);

    if (vol % m === 0){
      res = i;
      break;
    } 
    else if (vol > m) {
      res = -1;
      break;
    }  
  }

  return res;
}

console.log(findNb(1));
console.log(findNb(12));