function multiplicationTable(n) {
  let result = [], temp = [];

  for (let i = 1; i <= n; i++) {
    temp = [];
    for (let j = 1; j <= n; j++) {   
      temp.push(i*j) 
    }
    result.push(temp);
  }

  return result;
}

console.log(multiplicationTable(3)); //[[1,2,3],[2,4,6],[3,6,9]]