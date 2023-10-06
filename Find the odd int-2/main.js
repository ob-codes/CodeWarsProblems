function findOdd(arr) {
  let result=0;

  let arrSorted = arr.sort((a, b) => a-b);
  
  for (let i = 1; i < arrSorted.length; i++) {
    if (arrSorted[i] === arrSorted[i-1])
      i++;
    else
      return arrSorted[i-1];
  }

  return arrSorted[arrSorted.length -1];
}
console.log(findOdd([1,1,2])); // 2
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));//5
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])); // -1
console.log(findOdd([10])); // 10