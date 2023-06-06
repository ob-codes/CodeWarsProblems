function minMax(arr){
  let min = 0;
  let max = 0;
  
  min = Math.min(...arr);
  max = Math.max(...arr);

  return [min, max]; // fix me!
}

console.log(minMax([1,2,3,4,5]));