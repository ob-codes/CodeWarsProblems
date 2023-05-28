function toNumberArray(stringarray){
  let newArray = [];
  
  stringarray.forEach(element => newArray.push(Number(element)));

  return newArray;
}

console.log(toNumberArray(["1.1","2.2","3.3"]));