function addBinary(a,b) {
  let result=[];
  let temp = a+b;
  while(temp > 0){
    result.unshift(temp%2);
    temp = parseInt(temp/2);
  }
  
  return result.join("");
}

console.log(addBinary(1,2));