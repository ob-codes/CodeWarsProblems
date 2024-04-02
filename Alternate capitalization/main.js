function capitalize(params) {
  let result = [], temp1 = [], temp2 = [];
  let arr = params.split("");

  arr.filter((el, idx) => {
    if (idx % 2 === 0) {
      temp1.push(el.toUpperCase());
      temp2.push(el.toLowerCase());
    }
    else {
      temp1.push(el.toLowerCase());
      temp2.push(el.toUpperCase());
    }
  });

  result.push(temp1.join(""), temp2.join(""));

  return result;
}

console.log(capitalize("abcdef"));//['AbCdEf', 'aBcDeF']
console.log(capitalize("codewars"));//['CoDeWaRs', 'cOdEwArS']
console.log(capitalize("abracadabra"));//['AbRaCaDaBrA', 'aBrAcAdAbRa']
console.log(capitalize("codewarriors"));//['CoDeWaRrIoRs', 'cOdEwArRiOrS']