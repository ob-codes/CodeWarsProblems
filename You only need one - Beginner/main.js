function check(a, x) {
  let result = false;
  
  a.map(el => {
    if (el === x)
      result = true;
  });

  return result;
}

console.log(check([66, 101], 66));