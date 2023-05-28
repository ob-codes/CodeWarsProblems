function deleteNth(arr,n){
  let res = [];
    
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] === arr[i]){
        count++;
        if (count > n)
          arr[j] = "$";
      }
    }
  }
  res = arr.filter(x => x !== "$");
  return res;
}

console.log(deleteNth([20,37,20,21], 1));