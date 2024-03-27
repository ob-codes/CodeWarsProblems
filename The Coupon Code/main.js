function compareDate(currentDate, expirationDate) {
  

  return false;
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode !== correctCode)
    return false;
  
  if (!compareDate(currentDate, expirationDate))
    return false;
  
  return true;
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));//true
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'));//false
console.log(checkCoupon('123','123','October 5, 2014','October 1, 2014'));//false
console.log(checkCoupon('123','123','September 5, 2014','September 15, 2014'));//true