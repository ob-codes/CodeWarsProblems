function persistence(num) {
  let result = 0;
  result = recurse(num);
  return result;
}


console.log(persistence(39));//3
console.log(persistence(4)); //0
console.log(persistence(25)); //2
console.log(persistence(999)); //4