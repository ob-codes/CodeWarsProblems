function race(a, b, g) {
  let result = [-1, -1, -1];

  temp = g/(b-a);

  if (temp>0) {
    result = [];
    temp *= 3600;
    hr = parseInt(temp / 3600);
    min = Math.round(parseInt(temp / 60) - (hr*60));
    sec = Math.round(parseInt(temp) - (min*60) - (hr*3600));
    
    result.push(hr);
    result.push(min);
    result.push(sec);
  }
  
  return result;
}

console.log(race(720, 850, 70));//[0, 32, 18]
console.log(race(80, 91, 37));//[3, 21, 49]
console.log(race(80, 100, 40));//[2, 0, 0]
console.log(race(720, 850, 37));//[0, 17, 4]