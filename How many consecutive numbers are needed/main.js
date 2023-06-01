function consecutive(arr) {
  let res = 0;
  let newArr = [];
    
  arr.sort((a, b) => a-b);
    
  for(let i=arr[0]; i <= arr[arr.length -1]; i++){
    newArr.push(i);   
  }
  
  res = newArr.length - arr.length;

  return res;
}

console.log(consecutive([4,8,6]));