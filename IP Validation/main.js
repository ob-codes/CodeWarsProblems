function isValidIP(params) {
  let result = true, paramsArr=[], temp=0;

  

  return result;
}

console.log(isValidIP("12.255.56.1"));//true
console.log(isValidIP(''));//false
console.log(isValidIP('abc.def.ghi.jkl'));//false
console.log(isValidIP('123.456.789.0'  ));//false
console.log(isValidIP('12.34.56'       ));//false
console.log(isValidIP('01.02.03.04'    ));//false
console.log(isValidIP('1e0.1e1.1e2.2e2'));//false
console.log(isValidIP(' 1.2.3.4'       ));//false
console.log(isValidIP('12.34.56.-7'    ));//false
console.log(isValidIP('\n1.2.3.4'      ));//false