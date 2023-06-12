function stray(arr){
  let result=0;
  result = arr.sort((a, b) => a-b);
  
  let firstElement = result.shift();
  let lastElement = result.pop();
  let secondLastElement = result.pop();
  
  if (lastElement !== firstElement && lastElement !== secondLastElement)
    result=lastElement;
  else
    result=firstElement;

  return result;
}

console.log(stray([1, 1, 2]));