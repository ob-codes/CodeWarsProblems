function validateWord(input) {
  let result = true, count = [];

  return result;
}

console.log(validateWord("abcabc"));//true
console.log(validateWord("abcabcd"));//false
console.log(validateWord("123abc!"));//true
console.log(validateWord("abcabc"));//true
console.log(validateWord("Abcabc"));//true
console.log(validateWord("abc123"));//true
console.log(validateWord("abcabcd"));//false
console.log(validateWord("abc!abc!"));//true
console.log(validateWord("abc:abc"));//false