function nbDig(n, d) {
  let result = 0, temp = [];
  
  for (let k = 0; k <= n; k++) {
    temp.push(k*k);
  }

  if (d==0) 
    result++; //to avoid skipping of first zero in result count

  temp.forEach(el => {

    while (el > 0) {
      if (el === d || el%10 == d) 
        result++;
      el = parseInt(el / 10);
    }      
  });   

  return result;
}

console.log(nbDig(10, 0)); //
console.log(nbDig(10, 1)); //
console.log(nbDig(25, 1)); //
console.log(nbDig(5750, 0)); //
console.log(nbDig(11011, 2)); //
console.log(nbDig(12224, 8)); //
console.log(nbDig(11549, 1)); //