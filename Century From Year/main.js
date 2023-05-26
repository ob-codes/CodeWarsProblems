function century(year) {
  // Finish this :)
  if (year % 100 === 0)
    return parseInt(year/100);
  else
    return parseInt(year/100) +1;
}

console.log(century(1705));