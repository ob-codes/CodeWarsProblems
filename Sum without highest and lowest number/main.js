function sumArray(array) {
  let result = 0;

  if (!Array.isArray(array) || array === null || array === [] || array.length<2)
    return 0;
  
  array.sort((a, b) => a-b).pop();
  array.shift();
  
  result = array.reduce((current, acc) => current + acc, 0);

  return result;
}

console.log(sumArray(null));
console.log(sumArray([-6, 20, -1, 10, -12 ]));