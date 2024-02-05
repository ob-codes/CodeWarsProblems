/*
*/
//codewars (7Kyu)
function nbYear(p0, percent, aug, p){
  let result = 0, years =0;

  while (p0 < p) {
    years++;
    p0 = parseInt(p0 + p0*percent/100 + aug);
  }
  result = years;
  return result;
}

console.log(nbYear(1500, 5, 100, 5000));//15
console.log(nbYear(1500000, 2.5, 10000, 2000000));//10