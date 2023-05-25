function doubleCheck(str){
  for(let i=0;i<str.length;i++){
    if (str.toLowerCase().charAt(i) ===  str.toLowerCase().charAt(i+1)){
      return true;
    }
  }
  return false;
}

console.log(doubleCheck("abca"));
console.log(doubleCheck("AabBcC"));