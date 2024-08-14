function getEvenNumbers(numbersArray){
  return numbersArray.filter(el => el%2 == 0);
}

console.log(getEvenNumbers([1,2,3,6,8,10]), [2,6,8,10]);
console.log(getEvenNumbers([1,2]), [2]);
console.log(getEvenNumbers([12,14,15]), [12,14]);
console.log(getEvenNumbers([13,15]), []);
console.log(getEvenNumbers([1,3,9]), []);