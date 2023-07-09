function removeEveryOther(arr){
  let result = [];
  result = arr.filter((el, idx) => {
    if (idx %2 == 0)
      return el;
  })
  return result;
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));