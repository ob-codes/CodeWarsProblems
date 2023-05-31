function filter_list(l) {
  let result =[];
  
  result = l.filter(curr => typeof curr == 'number')
  
  // Return a new array with the strings filtered out
  return result;
}

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));