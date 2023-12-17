function solution(params) {
  let result = [];
  if (params === null)
    return result;
  
  result = params.sort((a,b) => a-b);
    
  return params;
}

console.log(solution([1, 6, 10, 50, 5])); // should return [1,2,5,10,50]
console.log(solution([ 20, 2, 10 ])); // should return []