//codewars (7Kyu)
function breakChocolate(n,m) {
  let result = 0;
  
  result = n*m -1;
    
  return result > 0 ? result : 0;
}

console.log(breakChocolate(5, 5)); //24
console.log(breakChocolate(1, 1)); //0