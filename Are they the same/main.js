function comp(array1, array2){
  let res = false;
  if (array1 === null || array2 === null)
    res =  false;
  else {
    for (let i = 0; i < array2.length; i++) {
      for (let j = 0; j < array1.length; j++) {
        if (array2[i] === Math.pow(array1[j], 2)) {
          array1[j] = 0;
          res = true;
          break;      
        }
        else {
          res = false;
        }
      }
      if (!res)
        break;
    }
  }

  return res;
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));
console.log(comp([0, 9, 10, 8, 10, 1, 5, 8, 1, 9], [1, 64, 25, 81, 1, 100, 64, 1, 81, 100]));
console.log(comp([2, 3, 3], [4, 9, 9]));