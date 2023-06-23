function avg(a){
  return a.reduce((acc, element) => acc + element, 0) / a.length;
}

console.log(avg([0, 1, 2, 3, 4]));