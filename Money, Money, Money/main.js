function calculateYears(principal, interest, tax, d) {
  let years = 0;
  
  while (d > principal) {
    ++years;
    principal = principal + (principal * interest) - (principal * interest)*tax;
  }

  return years;
}

console.log(calculateYears(1000.00, 0.05, 0.18, 1100.00));//3
console.log(calculateYears(1000, 0.01625, 0.18, 1200));//14
console.log(calculateYears(1000, 0.05, 0.18, 1000));//0