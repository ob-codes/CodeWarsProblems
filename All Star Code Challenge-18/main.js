function strCount(str, ch) {
  let result = 0;
  
  str.split("").forEach(el => {
    if (el === ch)
      result++;
  });

  return result;
}

console.log(strCount("Hello", 'o'));//1
console.log(strCount("Hello", 'l'));//2
console.log(strCount("", 'z'));//0