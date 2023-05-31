function isIsogram(str){
  str = str.toLowerCase();
  str = str.split("");
  for(let i=0;i<str.length;i++){
    for(let j=i+1;j<str.length;j++){
      if (str[i] == str[j])
        return false;
    }
  }
  return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("isogramo"));