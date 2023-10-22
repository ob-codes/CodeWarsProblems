let capitals = function (word) {
  let result = [];

  word.split("").forEach((el, idx) => {
    if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) 
      result.push(idx);    
  });

  return result;
}

console.log(capitals("CodEWaRs"));