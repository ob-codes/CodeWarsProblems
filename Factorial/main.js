

function factorial(input) {
  let result = "";

  if (input < 0 || input > 12) 
    throw new RangeError("Input must be within [0-12]");
  
  result = calculateFactorial(input);

  return result;
}

console.log(factorial(0));//1
console.log(factorial(1));//1
console.log(factorial(2));//2
console.log(factorial(3));//6
console.log(factorial(13));//RangeError