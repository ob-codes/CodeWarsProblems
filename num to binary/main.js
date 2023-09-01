let result;

function convertToBin(num) {
  let remainder = "";

  if (num === 1) 
    return '1';
  
  remainder += num %2;
  
  return convertToBin(parseInt(num/2)) + remainder;
}

console.log(convertToBin(5));