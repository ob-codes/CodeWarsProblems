function hasSurvived(a, b) {
  let result = [];
  let temp = [];

  a.forEach((element, idx) => {
    temp.push(b[idx] - element);
  });

  result = temp.filter(el => el > 0);

  if (result.length == temp.length/2)
    return a.reduce((acc, c) => acc +c, 0) < b.reduce((acc, c) => acc +c, 0);
  else if (result.length > temp.length/2)
    return true;
  else 
    return false;  
}

console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8])); //false
console.log(hasSurvived([ 1, 3, 5, 7 ], [ 2, 4, 6, 8 ])); //true
console.log(hasSurvived([ 1, 3, 5, 7 ], [ 2, 4 ]));
console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8])); //false
console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8])); //true
console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7])); //true