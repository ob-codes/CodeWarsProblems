function makeString(s){
  let eachWord = "";
  let firstWords = "";    
    
  eachWord = s.split(" ");
  console.log(eachWord);
  eachWord.forEach(element => {
    firstWords += element.charAt(0);
  });

  return firstWords;
}

console.log(makeString("sees eyes xray yoat"));