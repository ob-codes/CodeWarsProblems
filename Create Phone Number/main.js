function createPhoneNumber(params) {
  let result= "";

  result += '(';
  result += params[0];
  result += params[1];
  result += params[2];
  result += ') ';
  result += params[3];
  result += params[4];
  result += params[5];
  result += '-';
  result += params[6];
  result += params[7];
  result += params[8];

  return result;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));//"(123) 456-7890"