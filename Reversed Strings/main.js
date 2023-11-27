function solution(params) {
  let result = [];

  params.split("").forEach(element => {
    result.unshift(element);
  });

  return result.join("").toString();
}

console.log(solution('world')); // =>  'dlrow'
console.log(solution('hello')); // =>  'olleh'
console.log(solution('')); // =>  ''
console.log(solution('h')); // =>  'h'