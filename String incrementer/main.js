function incrementString(params) {
  let result = "";
  let firstNumberIndex = 0, incremented = 0, oldLength= 0, newLength=0;

  paramsArray = params.split("");
  for (let i = paramsArray.length -1; i >= 0; i--) {
    let currentChar = paramsArray[i].charCodeAt(0);
    if ((currentChar >= 65 && currentChar <= 90) 
    || (currentChar >= 97 && currentChar <= 122)) {
      firstNumberIndex = i +1; 
      break;
    }   
  }
  
  if (firstNumberIndex < paramsArray.length) {
    result = params.slice(0,firstNumberIndex);
    incremented = params.slice(firstNumberIndex);
  }
  else {
    result = params.slice(0);
    incremented =  0;
  }
  oldLength = incremented.toString().length;
  newValue = ++incremented;
  newLength = newValue.toString().length;

  if(oldLength != newLength) {
    for (let i = 0; i < oldLength-newLength; i++) {
      result += '0';      
    }
  }  
  result += newValue;
  return result;
}

console.log(incrementString("foobar23"));// -> foobar24
console.log(incrementString("foo"));//foo1
console.log(incrementString("1"));//2
console.log(incrementString("foo0042"));// -> foo0043
console.log(incrementString("foo099"));// -> foo100
console.log(incrementString("foo9"));// -> foo10
console.log(incrementString("foobar000"));// -> foobar001
console.log(incrementString("009"));// -> 010
