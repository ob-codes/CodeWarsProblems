Array.prototype.map = (params) => {
  let result = [];

  this.forEach((element) => {
    result.push(params(element));
  });

  return result;
}

console.log([1,2,3].map(x => x ** 2));//[1,2,3].map(x => x ** 2) === [1,4,9]