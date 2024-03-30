function validateWord(input) {
  let result = true, count = [];

  arr = input.toLowerCase().split("");

  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    const outerElement = arr[i];
    
    temp = arr.filter(el => el === outerElement).length;

    if (!count.includes(temp))
      count.push(temp);
  }

  return count.length === 1;
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