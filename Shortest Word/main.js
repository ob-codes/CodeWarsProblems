function findShort(s){
  let splitStr = s.split(" ");
  let result = s.length;

  for(let i=0;i<splitStr.length;i++){
    if (result > splitStr[i].length)
      result = splitStr[i].length;
  }
  
  return result;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));