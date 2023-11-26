function persistence(num) {
  let result = 0;
  result = recurse(num);
  return result;
}
function recurse(num) {
  let iterationCount = 0;
  let numArray = num.toString().split("");

  if (numArray.length > 1)
    iterationCount++;
  else
    return iterationCount;
  
  temp = numArray.reduce((c, acc) => acc*c, 1);
  
  return iterationCount + recurse(temp);
}


console.log(persistence(39));//3
console.log(persistence(4)); //0
console.log(persistence(25)); //2
console.log(persistence(999)); //4