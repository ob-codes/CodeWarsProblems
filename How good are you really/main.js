function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }
  let average = (sum + yourPoints) / (classPoints.length +1);
  if(yourPoints > average)
    return true;
  else
    return false;
}

console.log(betterThanAverage([2, 3], 5));