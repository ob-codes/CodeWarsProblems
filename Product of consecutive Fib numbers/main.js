//codewars (5Kyu)
function productFib(num) {
  let result = [];
  let fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233];

  while (num > (fib[fib.length -1] * fib[fib.length -2])) {
    fib.push(fib[fib.length -1] + fib[fib.length -2]);
  }

  for (let i=0; i< fib.length; i++) {
    let temp = fib[i] * fib[i -1];
    if(num === temp) {
      result.push(fib[i -1], fib[i], true);
      break;
    }
    else if (temp > num) {
      result.push(fib[i -1], fib[i], false);
      break;
    }
  }
  
  return result;
}

console.log(productFib(714)); //[ 21, 34, 'true' ]
console.log(productFib(800)); //[ 34, 55, 'false' ]