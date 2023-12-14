function sortArray(params) {
  let result = [];  
  let paramsOdd = params.filter(el => el%2);

  paramsOdd.sort((a,b) => a-b);
  let index=0;
  params.forEach(element => {
    if(element%2==0)
      result.push(element);
    else
      result.push(paramsOdd[index++]);
  });

  return result;
}

console.log(sortArray([7, 1]));
console.log(sortArray([5, 8, 6, 3, 4]));//  =>  [3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));//  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
