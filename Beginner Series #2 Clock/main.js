function past(h, m, s){
  //#Happy Coding! ^_^
  let timeInMS;

  timeInMS = ((h*60*60) + (m*60) + s) * 1000;

  return timeInMS;
}

console.log(past(0,1,1));