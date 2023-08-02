const binaryArrayToNumber = arr => {
  let temp = [];
  arr.forEach(element => {
    temp.unshift(element); 
  });

  let result = temp.reduce((acc, el, idx) => acc +(el * Math.pow(2,idx)), 0);
  
  return result;
};

console.log(binaryArrayToNumber([0,0,1,1]));