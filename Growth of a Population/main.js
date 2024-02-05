/*
- Paramter: current population, percent increase, inhabitants coming/leaving, expected population
- Return: no of years to reach/surpass expected population
- Example: 1500 population with increase of 2% per annum will take 15 years to reach 5000
- Pseudo-code:
  a. Increase current population by input percent
  b. Add inhabitants coming or subtract inhabitants leaving each year 
  c. Increment year count by one in every iteration
  d. Repeat until current existing reach/surpass expected population 
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