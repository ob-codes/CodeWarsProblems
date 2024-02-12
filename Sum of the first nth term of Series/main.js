//codewars (7Kyu)
function SeriesSum(n) {
  let result = 0, temp = 1;

  if (n>0) 
    result = 1;
  
  for (let i =1; i< n;  i++) {
    temp += 3;
    result += 1/temp;
  }

  return result.toFixed(2);
}

console.log(SeriesSum(0));
console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(5));