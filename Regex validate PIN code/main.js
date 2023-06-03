function validatePIN (pin) {
  //return true or false
  pin = pin.toLowerCase();

  if (pin.length !== 4 && pin.length !== 6)
    return false;  
  
  for (let i = 0; i < pin.length; i++) {
    if (pin.charCodeAt(i) < 48 || pin.charCodeAt(i) > 57)    
      return false;
  }    
  /*
  pin.match(/^\d+$/);
  */
  return true;
}

console.log(validatePIN("123x"));