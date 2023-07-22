String.prototype.toAlternatingCase = function () {
  // Define your method here :)]
  let result = "";
  let strArray = [];

  strArray = this.split("");
  strArray.forEach(el => {
    if ((el.charCodeAt(0) - 'A'.charCodeAt(0)) > 26)
      result += el.toUpperCase();
    else
      result += el.toLowerCase(); 
  })
    

  return result;
}

console.log("heLLo world".toAlternatingCase());
console.log("1a2b3c4d5e".toAlternatingCase());