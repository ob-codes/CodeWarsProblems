function uniqueInOrder(input) {  
  let res = [], lastElement = "";
  let arr = [];

  if (typeof(input) === "string") 
    arr = input.split("");
  else
  arr = input;
  
  arr.filter((element, idx) => {    
    if (element !== lastElement)
      res.push(element);

    lastElement = element;
  });
  
  return res;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));