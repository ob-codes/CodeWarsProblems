function duplicateCount(text){
  let res = 0, lastCode = 0;

  let arr = text.toLowerCase().split("");
  arr.sort();
  
  for (let i=1; i<arr.length; i++){
    if ((arr[i] === arr[i-1]) && (arr[i] !== lastCode)) {  
      lastCode = arr[i];
      res++;
    }
  }
  
  return res;
}

console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("aA11"));
console.log(duplicateCount("Indivisibility"));