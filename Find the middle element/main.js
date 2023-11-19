function gimme(triplet) {
  let result = -1;

  sortedArray = [...triplet];
  sortedArray.sort((a, b) => a-b);

  if (sortedArray[1] === triplet[0])
    result = 0;
  else if (sortedArray[1] === triplet[1])
    result = 1;
  else
    result = 2;   
  
  return result;
}

console.log(gimme([2, 3, 1]));//0
console.log(gimme([5, 10, 14]));//1
console.log(gimme([-5.2, -10.6, 14]));//0
console.log(gimme([5.9, 10.4, 14.2]));//1