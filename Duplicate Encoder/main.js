function duplicateEncode(word) {
  let result = "";
  let wordArr = word.toLowerCase().split(""), temp = [...wordArr];

  for (let i = 0; i < wordArr.length; i++) {
    for (let j = i+1; j < wordArr.length; j++) {
      if (wordArr[j] === wordArr[i]) {
        temp[j] = '$'; 
        temp[i] = '$'; 
      }     
    }
  }

  result = temp.map((el) => {
    return el === '$' ? ')' : '(';
  }).join("");

  return result;
}

console.log(duplicateEncode("din"));//"din"      =>  "((("
console.log(duplicateEncode("recede"));//"recede"   =>  "()()()"
console.log(duplicateEncode("Success"));//"Success"  =>  ")())())"
console.log(duplicateEncode("(( @"));//"(( @"     =>  "))((" 