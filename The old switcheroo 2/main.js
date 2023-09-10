function encode(str) {
  let result = "";
  let alphabetsSmall = 'abcdefghijklmnopqrstuvwxyz';
  let alphabetsLarge = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let arr = str.split("");

  result = arr.map(el => {
    if (alphabetsSmall.includes(el))
      return el.charCodeAt(0) - 'a'.charCodeAt(0) +1;
    else if (alphabetsLarge.includes(el))
      return el.charCodeAt(0) - 'A'.charCodeAt(0) +1;
    else  
      return el;
  });

  return result.join("");
 }

 console.log(encode('abc')); //'123'
 console.log(encode('abc-#@5')); //'123-#@5'
 console.log(encode('ZzzzZ'))