function repeatStr (n, s) {
  let str='';
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str;
}

console.log(repeatStr(5, "#"));