function vowel2index(str) {  
  let res = [];
  let arr = str.split("");
  arr.filter((x, idx) => {
    if (x.match(/[aeiou]/gi))
      res.push(idx +1);
    else
      res.push(x);
  });
  
  return res.join("");
}

console.log(vowel2index('this is a string'));