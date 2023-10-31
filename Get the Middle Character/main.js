function getMiddle(s) {
  let  result = "";
  let len = s.split("").length;

  if (len %2)
    result = s.split("")[Math.floor(len/2)];
  else {
    result = s.split("")[len/2 -1];
    result += s.split("")[len/2];
  }
  
  return result;
}

console.log(getMiddle("test")); //es
console.log(getMiddle("testing")); //t
console.log(getMiddle("middle")); //dd