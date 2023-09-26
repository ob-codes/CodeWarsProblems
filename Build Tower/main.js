function towerBuilder(nFloors) {
  let result = [];

  for (let i=1; i<=nFloors; i++) {
    let temp = '';
    
    for (let j=0; j<nFloors-i; j++) {
      temp += ' ';
    }
    for (let j=0; j<2*i-1; j++) {
      temp += '*';
    }
    for (let j=0; j<nFloors-i; j++) {
      temp += ' ';
    }

    result.push(temp);
  }

  return result;
}

console.log(towerBuilder(3)); //[ '  *  ', ' *** ', '*****' ]
console.log(towerBuilder(1)); //['*']