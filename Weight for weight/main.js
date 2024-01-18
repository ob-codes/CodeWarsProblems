/*
1. Parameter: string
2. Return: string
3. Example: "56 65 74 100 99 68 86 180 90" -> 56=5+6=11, 65=6+5=11, => "100 180 90 56 65 74 68 86 99"
4. Pseudo-code:
  a. find the weight of each input value
  b. re-arrange the original values as per weight in ascending order
  c. values having equal weights to be arranged lexographicaly
*/
//codewars (5Kyu)


function orderWeight(params) {
  let result = "", objArr=[], arr = params.split(" ");
  
  arr.forEach(element => {
    let sumOfDigits = 0, tempObj={};

    sumOfDigits = element.split("").reduce((acc, c) => acc+(+c), 0);
    
    tempObj.value = element;
    tempObj.weight = sumOfDigits;

    objArr.push(tempObj); //`${element}:${sumOfDigits}`    
  });  
  
  objArr.sort(compareWeight);
  objArr.forEach(el => result += `${el.value} `);

  return result.trim();
}

console.log(orderWeight("120 12 2 102"));//"2 102 12 120"
console.log(orderWeight("103 123 4444 99 2000"));//"2000 103 123 4444 99"
console.log(orderWeight("56 65 74 100 99 68 86 180 90"));//"100 180 90 56 65 74 68 86 99"
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));//"11 11 2000 10003 22 123 1234000 44444444 9999"