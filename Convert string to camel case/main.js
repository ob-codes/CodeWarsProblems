function toCamelCase(params) {
  let result = "", paramsArr=[], capitalIndex=-1;
  
  paramsArr = params.split('');
  for (let i = 0; i < paramsArr.length; i++) {
    if (paramsArr[i] == '-' || paramsArr[i] == '_') {
      capitalIndex = i+1;
      continue; //skip the current character '-' or '_'
    }

    if(i==capitalIndex)
      result += paramsArr[i].toUpperCase();
    else
      result += paramsArr[i];
  }

  return result;
}

console.log(toCamelCase("the-stealth-warrior"));//"theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior"));//"TheStealthWarrior"
console.log(toCamelCase("The_Stealth-Warrior"));//"TheStealthWarrior"