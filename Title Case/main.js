function titleCase(input, except) {
  let result = '', result2 = '';

  if (input === null || input === '')
    return '';

/*
  for (let i = 1; i < input.length; i++) {
    if (input[i-1] ===' ')
      result += input[i].toUpperCase();
    else
      result += input[i].toLowerCase();
  }
*/
  result2 += input.split(' ').map((el, idx) => {    
    if (idx === 0)
      return el[0].toUpperCase() + el.substring(1).toLowerCase();
    else if (arguments.length > 1 && except.toLowerCase().split(" ").includes(el.toLowerCase()))
      return el.toLowerCase();
    else
      return el[0].toUpperCase() + el.substring(1).toLowerCase();
  }).join(' ');

  return result2;
}
console.log(titleCase('a clash of KINGS', 'a an the of')); //'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')); //'The Wind in the Willows'
console.log(titleCase('the quick brown fox')); //'The Quick Brown Fox'
console.log(titleCase('')) // ''