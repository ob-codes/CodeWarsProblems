function invert(array) {
  let array2=[];
  
  for (let i=0;i<array.length;i++){
    array2[i] = array[i] *-1;
  }
   return array2;
}

console.log(invert([1,2,3,4]));