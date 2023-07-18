const closestMultiple10 = num => {
  if (num%10 < 5)
    return num - num%10;
  else
    return num - num%10 +10;
};

console.log(closestMultiple10(22));
console.log(closestMultiple10(36));