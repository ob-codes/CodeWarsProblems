function disemvowel(str) {
  let str2 = "";
  
  str2 = str.toLowerCase().replace(/[aeiuo]/gi, "");

  return str2;
}

console.log(disemvowel("This website is for losers LOL!"));