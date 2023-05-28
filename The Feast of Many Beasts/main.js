function feast(beast, dish) {
  let res = false;

  if (beast.charAt(0) === dish.charAt(0) 
    && beast.charAt(beast.length -1) === dish.charAt(dish.length -1))
    res = true;

  return res;
}

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("brown bear", "bear claw"));