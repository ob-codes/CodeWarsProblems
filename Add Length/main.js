function addLength(str) {
  let result = [];

  let words = str.split(' ');
  
  words.forEach(el => {
    result.push(el + ' ' + el.length);
  });

  return result;
}

console.log(addLength('apple ban'), ["apple 5", "ban 3"]);
console.log(addLength('you will win'),["you 3", "will 4", "win 3"]);