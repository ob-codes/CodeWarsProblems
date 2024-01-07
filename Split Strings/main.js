/*
1. Parameter: string
2. Return: array of strings
3. Example: 'abc' =>  ['ab', 'c_'] and 'abcdef' => ['ab', 'cd', 'ef']
4. Pseudo-code: Split input string in pairs, if last element is single then add '_'
*/

function solution(params) {
  let result = [];
  let argsArr = params.split("");

  while(argsArr.length > 1) {
    let temp="";
    temp += argsArr.shift();
    temp += argsArr.shift();
    result.push(temp);
  }

  if (argsArr.length == 1) {
    result.push(argsArr + '_');
  }

  return result;
}

console.log(solution('abc'));//=>  ['ab', 'c_']
console.log(solution('abcdef'));//=> ['ab', 'cd', 'ef']