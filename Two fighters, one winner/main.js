function declareWinner(fighter1, fighter2, firstAttacker) {
  let result = "";
  let isWinnerDecided = false, firstPlayerTurn = false;
  
  if (firstAttacker === fighter1.toString())
    firstPlayerTurn = true;

  while(!isWinnerDecided) {
    if (firstPlayerTurn) {
      fighter2.health -= fighter1.damagePerAttack;
      firstPlayerTurn = false;
    }
    else {
      fighter1.health -= fighter2.damagePerAttack;
      firstPlayerTurn = true;
    }

    if (fighter1.health <= 0){
      isWinnerDecided = true;
      result = fighter2.toString();
    }
    else if (fighter2.health <= 0){
      isWinnerDecided = true;
      result = fighter1.toString();
    }      
  }

  return result;
}

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() { return this.name; }
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"));
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"));