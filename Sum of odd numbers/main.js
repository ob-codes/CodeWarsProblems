function rowSumOddNumbers(n) {
	let result = 0;
  let startingValue=n*(n-1) +1;

  for(let j=startingValue; n>0; j++){
    if (j%2){
      result+=j;
      n--;
    }
  }

  return result;
}

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(4));
console.log(rowSumOddNumbers(42));