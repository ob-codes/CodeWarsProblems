function arrayDiff(a, b) {
  let res = [];

  for(let i=0;i<a.length;i++) {
    if (!b.includes(a[i]))
      res.push(a[i]);
  }

  return res;
}

console.log(arrayDiff([1,2], [1]));