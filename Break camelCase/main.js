function solution(string) {
  let res = "";
  
  res = string.replace(/([A-Z])/g, " $1");

  return res;
  /*
  let idx = [0];
  
  let arr = string.split("");

  arr.forEach((element, i) => {
    if (element.match(/[A-Z]/))
      idx.push(i);
  });
  
  for (let i=1;i <= idx.length; i++){
    res += `${string.slice(idx[i-1], idx[i])}`;
    res += " ";
  }

  return res.trim();
  */
}

console.log(solution('camelCasing'));
console.log(solution('camelCasingTestCasing'));