function hasSurvived(attacker, defender) {
  let wins = 0, loses = 0;

  let attackPower = attacker.reduce((acc, c) => acc + c, 0);
  let defendPower = defender.reduce((acc, c) => acc + c, 0);


  if (defender.length > attacker.length)
    wins = defender.length - attacker.length;
  else
    loses = attacker.length - defender.length;

  for (let i=0;i< (defender.length > attacker.length ? attacker.length : defender.length); i++) {
    if (defender[i] > attacker[i])
      wins++;
    else if (attacker[i] > defender[i])
      loses++;
  }

  if (wins > loses) 
    return true;
  else if (wins === loses)
    return defendPower >= attackPower;
  else 
    return false;
}

console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8])); //false
console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8])); //true
console.log(hasSurvived([1, 3, 5, 7], [2, 4]));
console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8])); //false
console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8])); //true
console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7])); //true
console.log(hasSurvived([58,14,98,99,3,90,47,70,57,72],[80,80,59,82,66,39,21,94,65,22])); //true