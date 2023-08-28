function removeUrlAnchor(url){
  let result = "";

  let temp = -1;
  temp = url.indexOf('#');
  
  if (temp > -1)
    result = url.split("").splice(0, temp).join("");
  else
    result = url;

  return result;
}

console.log(removeUrlAnchor('www.codewars.com#about'));