function high(x){
  let result="", temp=0, idxOfMaxValue=-1;
  let value=[];
  
  let arr = x.split(" ");

  arr.forEach(element => {
    temp = 0;
    element.split("").forEach(el => {
      temp += el.charCodeAt(0) - 97 +1;
    });
    value.push(temp);
  });

  idxOfMaxValue = value.indexOf(Math.max(...value)); //finds the index of max value in an array
  
  return arr[idxOfMaxValue];
}

console.log(high('man i need a taxi up to ubud'));//'taxi'
console.log(high('what time are we climbing up the volcano'));//'volcano'
console.log(high('take me to semynak'));//'semynak'