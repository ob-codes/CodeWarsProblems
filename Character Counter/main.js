function validateWord(input) {
  let result = true, count = [];

  arr = input.toLowerCase().split("");

  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    const outerElement = arr[i];
    
    for (let j = i; j < arr.length; j++) {
      if (outerElement == arr[j] && arr[j] != "") {
        arr[j] = "";
        ++temp;
      }
    }
    temp > 0 ? count.push(temp) : 0;
  }

  count.filter((el, idx, countArray) => {
    if (el != countArray[0])
      result = false;
  });

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