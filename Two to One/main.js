function longest(s1, s2) {
  let str = s1 + s2;
  str = str.toLowerCase().split("");
  
  let result ="";
  for (let i = 97; i<=122; i++) {
    if(str.includes(String.fromCharCode(i))){
      result += String.fromCharCode(i);
    }
  } 
  return result;
}

console.log(longest("areTHeyhere", "yestheyarehere"));