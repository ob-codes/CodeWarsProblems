/*
1. Parameter: string, string
2. Return: string 
3. Example: "hello" & "aaahello" => "a", "abcde" & "2db2a2ec" => "2"
4. Pseudo-code:
  a. Match every char of bigger string with smaller one
  b. Look for any mismatch
  c. If match found, replace smaller string char with '' to avoid duplicate matching and move to next char of big string
  d. If match is not found in smaller string, that char is the answer
*/
//codewars (6Kyu)
function addedChar(str1, str2) {
  let result = "";

  arr1 = str1.split("");
  arr2 = str2.split("");
  
  for (let j = 0; j < arr2.length; j++) {
    let isFound = false;

    for (let i = 0; i < arr1.length; i++) {
      if (arr2[j] === arr1[i]) {
        isFound = true;
        arr1[i] = "";
        break;
      }
    }

    if (!isFound) {
      result = arr2[j];
      break;
    }    
  }
  
  return result;
}

console.log(addedChar("hello", "aaahello")); //"a"
console.log(addedChar("abcde", "2db2a2ec")); //"2"
console.log(addedChar("aabbcc", "aacccbbcc")); //"c"