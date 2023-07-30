function getOrder(input) {
  let result = "";
  let actualItem = ["burger", "fries", "chicken", "pizza", "sandwich", "onionrings", "milkshake", "coke"];
  let desiredItem = ["Burger ", "Fries ", "Chicken ", "Pizza ", "Sandwich ", "Onionrings ", "Milkshake ", "Coke "];
  
  for (let i=0; i< actualItem.length;i++) {
    while (input.includes(actualItem[i]) == true){
      result += desiredItem[i];
      input = input.replace(actualItem[i], '____');
    }
  }
    
  return result.trim();
}

console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"));
console.log(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"));