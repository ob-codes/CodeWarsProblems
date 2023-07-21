function longestConsec(strarr, k) {
  let result="";
  let currSum=0, highestSum=0, lastIdx=0;
  let j=0;
  
  if ((strarr.length < k) || (k === 0))
    return result;

  for (let i = 0; i <= strarr.length -k; i++) {
    currSum=0
    for (j = i; j  < i + k; j++) {
      currSum += strarr[j].length;    
    } 
    if (currSum > highestSum) {
      highestSum = currSum;
      lastIdx = j; 
    }
  }
  for(let ii=lastIdx - k; ii < lastIdx; ii++){
    result += strarr[ii];
  }   

  return result;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));
console.log(longestConsec([], 3));