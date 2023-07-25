function getOrder(input) {
  let result = "";
  let actualItem = ["burger", "fries", "chicken", "pizza", "sandwich", "onionrings", "milkshake", "coke"];
  let desiredItem = ["Burger ", "Fries ", "Chicken ", "Pizza ", "Sandwich ", "Onionrings ", "Milkshake ", "Coke "];
  
  for (let i=0; i< actualItem.length;i++){
    let temp = input.indexOf(actualItem[i]);
    while (temp > -1){
      result += desiredItem[i];
      input[temp] = "$";
    }      
    i++;
  }
  
  /*
  result = input.replaceAll("burger", " Burger");
  result = result.replaceAll("fries", " Fries");
  result = result.replaceAll("chicken", " Chicken");
  result = result.replaceAll("pizza", " Pizza");
  result = result.replaceAll("sandwich", " Sandwich");
  result = result.replaceAll("onionrings", " Onionrings");
  result = result.replaceAll("milkshake", " Milkshake");
  result = result.replaceAll("coke", " Coke");
  */
  
  return result.trim();
}

console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"));
console.log(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"));