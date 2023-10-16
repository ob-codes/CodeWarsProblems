function helpZoom(arr) {
  let result = 'No';

  if (!Number.isInteger(Math.sqrt(arr.length)))
    return "No";
  else {
    while( arr.length > 1) {
      if (arr.pop() !== arr.shift())
        return "No";
    }
  }

  return 'Yes';
}

console.log(helpZoom([1,1,0,0,0,0,0,1,1])); //Yes
console.log(helpZoom([1,1,0,0,1,0,0,1])); //No