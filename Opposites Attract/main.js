function lovefunc(flower1, flower2){
  // moment of truth

  if (flower1 % 2 !== flower2 % 2)
    return true;
  else
    return false;
}

console.log(lovefunc(1,4));