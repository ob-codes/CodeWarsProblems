var isSquare = function(n){
  let result = false;
  let sqrtNum = Math.sqrt(n);

  if (Number.isInteger(sqrtNum))
    result = true;

  return result;
}

console.log(isSquare(4));
console.log(isSquare(165));
console.log(isSquare(15));
console.log(isSquare(9));