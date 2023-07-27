var number=function(array){
  //your awesome code here
  let result = [];
  let i = 1;
  array.forEach(el => {
    result.push(`${i}: ${el}`);
    i++;
  })

  return result;
}

console.log(number(["a", "b", "c"]));