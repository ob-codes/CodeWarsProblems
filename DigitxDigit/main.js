function squareDigits(num){
  let result = [];
  if (num === 0)
    return 0;
  while (num > 0){
    let digit = num % 10;
    result.push(digit*digit);

    num = parseInt(num / 10);
  }
  result.reverse();
  result = result.join("")
  return parseInt(result);
}

console.log(squareDigits(3212));