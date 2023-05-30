function isPangram(string){
  let res = false;
  
  if (string.toLowerCase().indexOf(/^[a-z]+$/) > -1) {
    res = true;
  }
  
  return res;
}

console.log(isPangram("This is not a pangram."));
console.log(isPangram("The quick brown fox jumps over the lazy dog."));