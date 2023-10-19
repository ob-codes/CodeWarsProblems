function solve(params){
  let upperCount = 0;

  params.split("").forEach(element => {
    if (element.charCodeAt() >= 65 && element.charCodeAt() <= 90)
      upperCount++;
  });

  if (upperCount <= params.length/2)
    return params.toLowerCase()
  else
    return params.toUpperCase();
}

console.log(solve("coDe")); //"code"
console.log(solve("CODe")); //"CODE"
console.log(solve("aaaZ")); //"aaaz"