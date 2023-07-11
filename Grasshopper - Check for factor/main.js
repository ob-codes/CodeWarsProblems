function checkForFactor (base, factor) {
  let result = false;
  result = base % factor ? false:true;
  return result;
}

console.log(checkForFactor(10,2));
console.log(checkForFactor(24612,3));