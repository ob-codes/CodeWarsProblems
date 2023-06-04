function solution(str, ending){
  // TODO: complete
  let slicedStr = str.slice(str.length - ending.length);
  if (slicedStr === ending)
    return true;
  else
    return false;
}

console.log(solution('abcde', 'cde'));