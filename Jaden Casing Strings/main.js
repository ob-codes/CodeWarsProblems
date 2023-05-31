String.prototype.toJadenCase = function () {
  let separateWords="";
  separateWords = this.toLowerCase().split(" ");
  
  for (let i = 0; i < separateWords.length; i++) {
    separateWords[i] = separateWords[i].charAt(0).toUpperCase() + separateWords[i].slice(1); 
  }

  return separateWords.join(" ");
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());

