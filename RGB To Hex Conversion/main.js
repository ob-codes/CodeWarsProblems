/*
 1. Params: numbers, 
 2. Return: string,
 3. Example: (173, 255,  47) => 'ADFF2F'
 4. Pseudo-code: keep input numbers in range (0-255) and convert them to 2-digit hex
*/
function rgb(r, g, b) {
  let result = "", temp=0;
    
  argumentsArr = [...arguments];
  
  argumentsArr.forEach(el => {
    if (el > 255) 
      el = 255;
    else if (el <0) 
      el = 0;
    
    temp = el.toString(16);

    result += temp.length > 1 ? temp: '0' + temp;
  });
  
  return result.toUpperCase();
}

console.log(rgb(300, 255, 255));//'FFFFFF'
console.log(rgb(173, 255,  47));//'ADFF2F'
console.log(rgb(  0,   0,   0));//'000000'
console.log(rgb(  0,   0, -20));//'000000'