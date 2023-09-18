function removeSmallest(numbers) {
  let result = [];

  if (numbers.length <=1) 
    return [];
  
  let min = Math.max(...numbers), minIndex= numbers.length;

  numbers.forEach((element, idx) => {
    if (element < min) {
      min = element;
      minIndex = idx;
    }
  });

  result = numbers.filter((el, id) => {
    if (id !== minIndex)
      return el;
  })

  return result;
}

console.log(removeSmallest([1, 2, 3, 4, 5])); //[2, 3, 4, 5]
console.log(removeSmallest([2, 2, 1, 2, 1])); //[2, 2, 2, 1]