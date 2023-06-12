function xx(arr){
  let result=0;
  result = arr.sort((a, b) => a-b);
  
  

  return result;
}

console.log(xx([1, 1, 2]));