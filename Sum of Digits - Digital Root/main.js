function digitalRoot(params) {  
  temp = params.toString().split("").reduce((acc, c) => acc + (+c), 0).toString();
  
  if (params.length <= 1)
    return Number(temp);

  return digitalRoot(temp);
}

console.log(digitalRoot(16));//7
console.log(digitalRoot(456));//6
console.log(digitalRoot(567));//9
console.log(digitalRoot(132189));//6
  