function reverseWords(str) {
  // Go for it
  str = str.split(" ");
  
  let str2 = "";
  
  for(let i=0; i<str.length; i++)
  {
      for(let j=(str[i].length -1); j>=0; j--)
      {
        str2 += str[i][j];
      }
    str2 += " ";
  }
  
  return str2.trim();
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));