function distinct(a) {
  if (a.length == 1)
    return a;
  
  let filteredArray = a.filter((el, idx) => {
    if (a.indexOf(el) === idx)
      return el;
  });
  
  return filteredArray;
}

console.log(distinct([1]));//[1]
console.log(distinct([1,2]));//[1,2]
console.log(distinct([1,1,2]));//[1,2]