function alphabetPosition(text) {
  let res = "";
  let newArr = [];
    
  res = text.toLowerCase().split("")
  .filter(element => {
    if (element >= "a" && element <= "z")
      return element;
  })
  .map(element => element.charCodeAt(0) - "a".charCodeAt(0) +1)
  .join(" "); 

  return res;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));